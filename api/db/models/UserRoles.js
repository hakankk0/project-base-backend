const mongoose = require("mongoose");

const schema = moongoose.Schema({
    role_id: {type: moongoose.SchemaTypes.ObjectId, required: true},
    user_id: {type: moongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class UserRoles extends moongoose.Model {

}

schema.loadCLass(UserRoles);
module.exports = mongoose.model("user_roles",schema);