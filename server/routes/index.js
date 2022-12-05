import express from "express";
const router = express.Router();
import { catchErrors } from "../handlers/errorHandler";
import usercontroller from "../controllers/user";
import admincontroller from "../controllers/admin";
import contactcontroller from "../controllers/contactus"
import config from "../config";
const imageUpload = config.upload;

router.post("/api/v1/user/register", imageUpload.single("photo"), usercontroller.createNewUser);
router.get("/api/v1/user/:id", catchErrors(usercontroller.getUser));
router.get("/api/v1/users", catchErrors(usercontroller.getAllUsers));
router.delete("/api/v1/user/delete/:id", catchErrors(usercontroller.deleteUser));
router.put("/api/v1/user/update/:id", catchErrors(usercontroller.updateUser));

//admin geting data
router.get("/api/v1/m/users", catchErrors(usercontroller.findRegisteredMale));
router.get("/api/v1/f/users", catchErrors(usercontroller.findRegisteredFemale));
router.get("/api/v1/ng/users", catchErrors(usercontroller.findRegisteredNigerian));

router.post("/api/v1/admin/register", admincontroller.newAdmin);
router.post("/api/v1/admin/login", admincontroller.loginAdmin);
router.get("/api/v1/admin/:id", catchErrors(admincontroller.getAdmin));
router.get("/api/v1/admins", catchErrors(admincontroller.getAdmins));
router.delete("/api/v1/admin/delete/:id", catchErrors(admincontroller.deleteAdmin));
router.put("/api/v1/admin/update/:id", catchErrors(admincontroller.updateAdmin));
// contactus

router.post('/api/v1/contactus', contactcontroller.createContactUs)
router.get('/api/v1/contactus', contactcontroller.getAllContactus)
router.get('/api/v1/contactus/:id', contactcontroller.getSingleContactus)
router.delete('/api/v1/contactus/:id', contactcontroller.DeleteContactus)
export default router;
