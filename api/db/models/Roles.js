const mongoose = require("mongoose");

const schema = moongoose.Schema({
    role_name: {type: String, required: true},
    is_active: {type: Boolean, default: true},
    created_by: {
        type: moongoose.SchemaTypes.ObjectId,
        required: true
    }
    
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class Roles extends moongoose.Model {

}

schema.loadCLass(Roles);
module.exports = mongoose.model("roles",schema);