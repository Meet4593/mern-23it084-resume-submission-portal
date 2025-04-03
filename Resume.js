const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
    name: String,
    email: String,
    resumeUrl: String,
});

module.exports = mongoose.model("Resume", ResumeSchema);
