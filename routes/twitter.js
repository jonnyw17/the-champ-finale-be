const express = require('express');
const app = express();
const router = require('express').Router();
const getTweets = require('../controllers/twitter')

router.post('/tweetuser', getTweets)
// router.get('/userprofile', getTwitterProfileImage)

module.exports = router
