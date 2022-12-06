// Require the package

const QRCode = require('qrcode')

async function getQRCode() {
    // Creating the data
    let data = {

        name:"Otitoju John",

        age: 45,

        department:"Software Engineer",

        id:"aisuoiqu3234738jdhf100223"
    }

    // Converting the data into String format
    let stringdata = JSON.stringify(data)
    
    // Print the QR code to terminal
    let QRcodeOnTerminal = await QRCode.toString(stringdata, {type: 'terminal'})
    console.log(QRcodeOnTerminal)
    
    // Converting the data into base64 
    let QRCodeOnCodeForImage = await QRCode.toDataURL(stringdata)
    console.log(QRCodeOnCodeForImage)
//     QRCode.toDataURL(stringdata, function (err, code) {

//     if(err) return console.log("error occurred")
 

//     // Printing the code

//     console.log(code)
// })
}

getQRCode()
