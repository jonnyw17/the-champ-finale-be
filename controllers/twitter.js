const env = require('dotenv').config({path: './.env'})
const Twit = require('twit');
const path = require('path');

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

getTweets = (req, res) => {
  let userTweet = req.body.message;

  T.post('statuses/update', { status: userTweet }, (err, data, response) => {
    console.log(data)
  })
}
console.log(getTweets())

module.exports = getTweets
