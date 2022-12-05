import AdminService from "../services/admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config";

class AdminController {
    static async newAdmin(req, res) {
        try {
            const { name, email, password } = req.body
            if(!name || !email || !password) {
                return res.status(400).json({
                    message: "No empty field is required"
                })
            }
            else {
                const hashed = bcrypt.hashSync(password, 10)
                const info = await AdminService.newAdmin(req.body)
                info.password = hashed
                await info.save()
                return res.status(201).json({
                    message: "created"
                })
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async getAdmin(req, res) {
        try {
            const _id  = req.params.id;
             console.log(`test ${_id}`)
            const info = await AdminService.getAdmin({_id})
            if(!info) {
                return res.status(400).json({
                    message: "not found"
                })
            }
            else {
                return res.status(200).json({
                    info: info,
                    message:'success'
                })
            }
        } catch (e) {
            return res.json({
                error: e.message
            })
        }
    }

    static async loginAdmin(req, res) {
        try {
            const { email, password } = req.body
            if(!email || !password) {
                return res.status(400).json({
                    message: "No empty field"
                })
            }
            else {
                const Admin = await AdminService.getAdminEmail({email})
                if(!Admin) {
                    return res.status(400).json({
                        message: "wrong password/email"
                    })
                }
                else {
                    const passwordIsValid = bcrypt.compareSync(password, Admin.password)
                    if(!passwordIsValid) {
                        return res.status(400).json({
                            message: "wrong password/email"
                        })
                    }
                    else {
                        const token = await jwt.sign({_id: Admin._id, email: Admin.email, name: Admin.name}, config.Admin_secret)
                        return res.status(200).json({
                            message: "successful",
                            token: token,
                            id:Admin._id,
                            code:"OK"
                        })
                    }
                }
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async getAdmins(req, res) {
        try {
            const info = await AdminService.getAdmins()
            if(info.length < 0) {
                return res.status(400).json({
                    message: "length 0"
                })
            }
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async deleteAdmin(req, res) {
        try {
            const { id } = req.params
            const info = await AdminService.deleteAdmin(id)
            if(!info) {
                return res.status(400).json({
                    message: "Not found"
                })
            }
            else {
                return res.status(200).json({
                    message: "deleted"
                })
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async updateAdmin(req, res) {
        try {
            const { id } = req.params
            const info = await AdminService.getAdmin(id)
            if(!info) {
                return res.status(400).json({
                    message: "Not found"
                })
            }
            else {
                const { email, name } = req.body
                info.email = email || info.email
                info.name = name || info.name
                await info.save()
                return res.status(200).json({
                    message: "updated"
                })
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }
}

export default AdminController;
