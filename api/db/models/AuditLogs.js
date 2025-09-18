const mongoose = require("mongoose");

const schema = moongoose.Schema({
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String,  
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class AuditLogs extends moongoose.Model {

}

schema.loadCLass(AuditLogs);
module.exports = mongoose.model("audit_logs",schema);