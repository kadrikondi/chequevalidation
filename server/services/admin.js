import Model from "../models/admin";

class AdminService {
    static async newAdmin(data) {
        try {
            return await Model.create(data)
        } catch (e) {
            throw e
        }   
    }

    static async getAdmin(id) {
        try {
            return await Model.findOne({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async getAdminEmail(email) {
        try {
            return await Model.findOne(email)
        } catch (e) {
            throw e
        }
    }

    static async getAdmins() {
        try {
            return await Model.find({}).sort({ "_id": -1 })
        } catch (e) {
            throw e
        }
    }

    static async deleteAdmin(id) {
        try {
            return await Model.findOneAndRemove({ _id: id})
        } catch (e) {
            throw e
        }
    }
};

export default AdminService;
