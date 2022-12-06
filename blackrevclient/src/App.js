
import './App.css';
import {Route,Switch} from "react-router-dom"
import Router from './route'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer'


function App() {
  return (
    <div className="App">
    <Route component={Header}/>
     <Route component={Router}/>
     <Route component={Footer}/>
    </div>
  );
}
  // "proxy": "http://localhost:7000/"
export default App;
