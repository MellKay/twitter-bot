const twit = require("twit");
const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
};

const Twitter = new twit(config);

function retweet() {
  Twitter.get(
    "search/tweets",
    {
      q: "#schoolofcode", // REQUIRED
      result_type: "recent",
      lang: "en",
    },
    function (err, data) {
      // if there no errors
      if (!err) {
        // grab ID of tweet to retweet
        let retweetId = data.statuses[0].id_str;
        // Tell TWITTER to retweet
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId,
          },
          function (err, response) {
            if (response) {
              console.log("Retweeted #SchoolOfCode!");
            }
            // if there was an error while tweeting
            if (err) {
              console.log(
                "Something went wrong while RETWEETING... Duplication maybe..."
              );
            }
          }
        );
      }
      // if unable to Search a tweet
      else {
        console.log("Something went wrong while SEARCHING...");
      }
    }
  );
}

function retweetSOC() {
  Twitter.get(
    "search/tweets",
    {
      q: "from:@theschoolofcode", // REQUIRED
      result_type: "recent",
      lang: "en",
    },
    function (err, data) {
      // if there no errors
      if (!err) {
        // grab ID of tweet to retweet
        let retweetId = data.statuses[0].id_str;
        // Tell TWITTER to retweet
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId,
          },
          function (err, response) {
            if (response) {
              console.log("Retweeted School Of Code!");
            }
            // if there was an error while tweeting
            if (err) {
              console.log(
                "Something went wrong while RETWEETING... Duplication maybe..."
              );
            }
          }
        );
      }
      // if unable to Search a tweet
      else {
        console.log("Something went wrong while SEARCHING...");
      }
    }
  );
}

function avatar() {
  Twitter.get(
    "search/tweets",
    {
      q: "#SoCAvatar", // REQUIRED
      result_type: "recent",
      lang: "en",
    },
    function (err, data) {
      // if there no errors
      if (!err) {
        // grab ID of tweet to retweet
        let retweetId = data.statuses[0].id_str;
        // Tell TWITTER to retweet
        Twitter.post(
          "statuses/retweet/:id",
          {
            id: retweetId,
          },
          function (err, response) {
            if (response) {
              console.log("Retweeted #SoCAvatar!");
            }
            // if there was an error while tweeting
            if (err) {
              console.log(
                "Something went wrong while RETWEETING... Duplication maybe..."
              );
            }
          }
        );
      }
      // if unable to Search a tweet
      else {
        console.log("Something went wrong while SEARCHING...");
      }
    }
  );
}

function hello() {
  Twitter.post("statuses/update", { status: "hello world!" }, function (
    err,
    data,
    response
  ) {
    console.log(data);
  });
}

retweet();
setInterval(retweet, 60000);

retweetSOC();
setInterval(retweetSOC, 60000);

avatar();
setInterval(avatar, 60000);

// hello();
