import UserService from '../services/user';
import cloudinary from 'cloudinary';
import QRCode from "qrcode";

class UserController {
  static async createNewUser(req, res) {
    try {
      const {
        surname,
        firstname,
        lastname,
        gender,
        email,
        phone,
        agegroup,
        country,
        state,
        education,
        worktype,
     
      } = req.body;
      const emailExist = await UserService.getUserEmail(email)
      const userLength = await UserService.getAllUsers()
      if (
        !surname ||
        !firstname ||
        !lastname ||
        !gender ||
        !email ||
        !phone ||
        !agegroup ||
        !country ||
        !state ||
        !education ||
        !worktype
      ) {
        return res.json({
          message: 'All fields are required',
        });
      } else if(emailExist) {
        return res.json({
          message: "Email already exist"
        })
      }
      // else if (req.file == undefined || req.file == '') {
      //   return res.json({
      //     message: `Error: No file selected`
      //   });
      // } 
      else {
        var image =req.body.photo
        const result = await cloudinary.uploader.upload(image);
        var imgUrl = result.secure_url;
        var len = userLength.length
        const info = await UserService.createNewUser(req.body);
        var SN;
        if(len === 0) {
          SN = 1
          info.userId = ` ${info.country.substring(0, 3)}/${info.state.substring(0, 3)}/${SN.toString()}`
          info.photo = imgUrl;
          await info.save()
          let stringdata = JSON.stringify(info)
          let QRCodeOnCodeForImage = await QRCode.toDataURL(stringdata)
          return res.status(201).json({
            info: info,
            message:'success',
            barcode: QRCodeOnCodeForImage
          });
        }
        else {
          SN = len + 1
          
          info.userId = `${info.country.substring(0, 3)}/${info.state.substring(0, 3)}/${SN.toString()}`
       
          info.photo = imgUrl;
          await info.save()
          let stringdata = JSON.stringify(info)
          let QRCodeOnCodeForImage = await QRCode.toDataURL(stringdata)
          return res.status(201).json({
            info: info,
            message:'success',
            qrcode: QRCodeOnCodeForImage
          });
        }
        
      }
    } catch (e) {
      return res.json({
        error: e.message,
      });
    }
  }

  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const info = await UserService.getSingleUser(id);
      if (!info) {
        return res.status(400).json({
          message: 'Not found',
        });
      } else {
        let stringdata = JSON.stringify(info)
        let QRCodeOnCodeForImage = await QRCode.toDataURL(stringdata)
        return res.status(200).json({
          info: info,
           qrcode: QRCodeOnCodeForImage
        });
      }
    } catch (e) {
      return res.status(500).json({
        error: e.message,
      });
    }
  }

  static async getAllUsers(_req, res) {
    try {
      const info = await UserService.getAllUsers();
      if (!info) {
        return res.status(400).json({
          message: 'Not found',
        });
      } else {
        return res.status(200).json({
          info: info,
        });
      }
    } catch (e) {
      return res.status(500).json({
        error: e.message,
      });
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const info = await UserService.getSingleUser(id);
      if (!info) {
        return res.status(400).json({
          message: 'Not found',
        });
      } else {
        info.surname = req.body.surname || info.surname;
        info.firstname = req.body.firstname || info.firstname;
        info.lastname = req.body.lastname || info.lastname;
        info.gender = req.body.gender || info.gender;
        info.education = req.body.education || info.education;
        info.country = req.body.country || info.country;
        info.state = req.body.state || info.state;
        info.email = req.body.email || info.email;
        info.phone = req.body.phone || info.phone;
        info.age = req.body.age || info.age;
        await info.save();
        return res.status(200).json({
          message: 'User information updated',
        });
      }
    } catch (e) {
      return res.status(500).json({
        error: e.message,
      });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const info = await UserService.deleteAUser(id);
      if (!info) {
        return res.status(400).json({
          message: 'Not found',
        });
      } else {
        return res.status(200).json({
          message: 'User deleted',
        });
      }
    } catch (e) {
      return res.status(500).json({
        error: e.message,
      });
    }
  }





  //get all nigerian
  static async findRegisteredNigerian(req, res) {
    try {
      const info =
      await UserService.getAllNgUsers();
      
      if (!info) {
        return res.status(404).json({
          message: 'No user found'
        })
      } else {
        return res.status(200).json({
          info: info
        })
      }
    } catch (error) {
      logger.error('Get all register  nigeria  error: ' + error.message)
      return res.status(500).json({
        code: 'SERVER_ERROR',
        message: 'something went wrong, Please try again'
      });
    }
  }

 //get all male
 static async findRegisteredMale(req, res) {
   try {
     const info =
       await UserService.getAllMale();

     if (!info) {
       return res.status(404).json({
         message: 'No user found'
       })
     } else {
       return res.status(200).json({
         info: info
       })
     }
   } catch (error) {
     logger.error('Get all register  nigeria  error: ' + error.message)
     return res.status(500).json({
       code: 'SERVER_ERROR',
       message: 'something went wrong, Please try again'
     });
   }
 }

static async findRegisteredFemale(req, res) {
  try {
    const info =
      await UserService.getAllFemale();

    if (!info) {
      return res.status(404).json({
        message: 'No user found'
      })
    } else {
      return res.status(200).json({
        info: info
      })
    }
  } catch (error) {
    logger.error('Get all register  nigeria  error: ' + error.message)
    return res.status(500).json({
      code: 'SERVER_ERROR',
      message: 'something went wrong, Please try again'
    });
  }
}

}





export default UserController;
