import Contactus from '../models/contactus'



//create contactus
exports.createContactUs = async (req, res) => {
    try {
        const {
            message,
            subject,
            username,
           
            email,
        } = req.body
        if (!message || !subject || !username ||  !email) {
            return res.json({
                message: 'Enter a all field'
            })
        } else {
            const info = await Contactus.create(req.body)
            return res.status(201).json({
                message: "message sent successfully",
                info: info
            })
        }
    } catch (e) {
        logger.error('ContactUs Message error: ' + e.message)
        return res.status(500).json({
            code: 'SERVER_ERROR',
            message: 'something went wrong, Please try again'
        });
    }
}










exports.getAllContactus = async (req, res) => {
    try {
        const info = await Contactus.find().sort({
            "_id": -1
        })
        if (!info) {
            return null
        } else {
            return res.status(200).json({
                info: info
            })
        }
    } catch (e) {
        logger.error('Contactus error: ' + e.message)
        return res.status(500).json({
            code: 'SERVER_ERROR',
            message: 'something went wrong, Please try again'
        });
    }
}
// get single message

exports.getSingleContactus= async(req, res)=>{
try{
const {id} = req.params;
const info = await Contactus.findById({_id:id})
if(!info){
    return res.json({
        message:'No message found'
    })
}else{
    return res.status(200).json({
        info:info
    })
}

    }catch(e){

        return res.json({
            error:e.message,
            code:"server error get single contactus"

        })
    }
}

//delete mesaage
exports.DeleteContactus = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const info = await Contactus.findOneAndDelete({
            _id: id 
        })
        if (!info) {
            return res.json({
                message: 'Not Found'
            })
        } else {
            return res.status(200).json({
                message:' deleted'
            })
        }

    } catch (e) {

        return res.json({
            error: e.message,
            code: "server error delete message"

        })
    }
}