import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import cookieParser from "cookie-parser";
import RateLimit from "express-rate-limit";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import errorHandler from "./handlers/errorHandler";
import cors from "cors";
import os from "os";
import cluster from "cluster";
import routes from "./routes/index";
const pid = process.pid
const PORT = process.env.PORT || 7000;

const limiter = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes 
    max: 1000, // limit each IP to 1000 requests per windowMs 
    delayMs: 0 // disable delaying — full speed until the max limit is  reached
});
if(cluster.isMaster){
    const n_cpus = os.cpus().length
    console.log(`Forking ${n_cpus} CPUS`)
    console.log(`Master has ${process.pid} process running`)
    for(let i=0; i < n_cpus; i++){
        cluster.fork()
    }
} else {
    app.use(cors());

    app.use(helmet());
    app.use(compression()); // compress all incoming data
    app.use(express.json({ limit: '100kb' })); // limit body payload to 100kb
    app.use(mongoSanitize()); // data sanitization against NoSQL injection attacks
    app.use(xss());  // data sanitization against XSS attacks (cross-site scripting)
    app.use(bodyParser.json());

    app.use(morgan('dev'));
    app.use(errorHandler.developmentErrors); //catch development errors
    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(cookieParser());
    app.use(limiter); // setting limiter on routes, preventing DOS attack
    app.use('/', routes);
    
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        next()
    });
    
    // if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../blackrevclient/build')));
        
          // Handle React routing, return all requests to React app
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../blackrevclient/build', 'index.html'));
        })

        // catch production errors
        app.use(errorHandler.productionErrors)
    // }
    
    app.listen(PORT, () => {
        mongoose.connect(config.DB_DGT, { useNewUrlParser: true,  useUnifiedTopology: true }, (err,res)=>{
          try {
              console.log('Connected to Database');
          } catch (err) {
              throw err;
          }
        })
        console.log(`App started on ${PORT} using process ${pid}`)
    })
}
cluster.on('exit', (worker) => {
    console.log(`Worker, ${worker.id} is no more`)
    cluster.fork()
})






export default app;
