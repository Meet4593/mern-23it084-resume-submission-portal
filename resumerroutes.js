const express = require("express");
const upload = require("../middleware/upload");
const Resume = require("../models/Resume");
const router = express.Router();

router.post("/upload", upload.single("resume"), async (req, res) => {
    try {
        const { name, email } = req.body;
        const newResume = new Resume({
            name,
            email,
            resumeUrl: req.file.path
        });

        await newResume.save();
        res.json({ message: "Resume uploaded successfully", resume: newResume });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/resumes", async (req, res) => {
    try {
        const resumes = await Resume.find();
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
