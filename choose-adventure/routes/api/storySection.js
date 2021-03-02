const express = require('express');
const router = express.Router();
const StorySection = require('../models/storySection');

//Get all routes
router.get('/', async (req, res) => {
    // const chapters = await StorySection.find();

    // res.json
    res.send({
        message: 'Story Path Router'
    })
});

router.get('/all-stories', async (req, res) => {
    const chapters = await StorySection.findAll();
    const chaptersJSON = chapters.toJSON()

    return res.send ({
        chapters:chaptersJSON
    })
});

router.post('/', async (req, res) => {
    try{
        const story = await StorySection.create(req.body)
        const storyJSON = story.toJSON()
        console.log(storyJSON)
        return res.send ({
            story:storyJSON
        })
    } catch(err){
        console.log(err)
    }

})
//Create new chapter
router.post('/new', async (req, res) => {
    const newChapter = new StorySection(req.body);

    const savedChapter = await newChapter();

    res.json(savedChapter);

});

module.exports = router