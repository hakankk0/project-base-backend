const mongoose = require("mongoose");

const schema = moongoose.Schema({
    is_active: {type: Boolean, default: true},
    created_by: {type: moongoose.SchemaTypes.ObjectId, required: true}
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class Categories extends moongoose.Model {

}

schema.loadCLass(Categories);
module.exports = mongoose.model("categories",schema);