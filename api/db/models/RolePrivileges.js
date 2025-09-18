const mongoose = require("mongoose");

const schema = moongoose.Schema({
    
    role_id: {type: moongoose.SchemaTypes.ObjectId, required: true},
    permission: {type: String, required: true},
    created_by: {type: moongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class RolesPrivileges extends moongoose.Model {

}

schema.loadCLass(RolesPrivileges);
module.exports = mongoose.model("roles_privileges",schema);