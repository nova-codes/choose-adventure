const express = require('express');
const router = express.Router();
const StorySection = require('../models/storySection');

//Get all routes
router.get('/', async (req, res) => {
    const chapters = await StorySection.find();

    res.json
});

//Create new chapter
router.post('/new', async (req, res) => {
    const newChapter = new StorySection(req.body);

    const savedChapter = await newChapter();

    res.json(savedChapter);

});

module.exports = router