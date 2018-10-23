var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.PORT || 8080;
var app = express();

// ALWAYS setup the alexa app and attach it to express before anything else.
var alexaApp = new alexa.app("test");

alexaApp.express({
  expressApp: app,
  //router: express.Router(),

  // verifies requests come from amazon alexa. Must be enabled for production.
  // You can disable this if you're running a dev environment and want to POST
  // things to test behavior. enabled by default.
  checkCert: false,

  // sets up a GET route when set to true. This is handy for testing in
  // development, but not recommended for production. disabled by default
  debug: true
});

// now POST calls to /test in express will be handled by the app.request() function

// from here on you can setup any other express routes or middlewares as normal
app.set("view engine", "ejs");

alexaApp.launch(function(request, response) {
  response.say("You launched the app!");
});
alexaApp.intent("nameIntent", {
  "slots": { "NAME": "LITERAL" },
  "utterances": [
    "my {name is|name's} {names|NAME}", "set my name to {names|NAME}"
  ]
},
function(request, response) {
  response.say("Success!");
}
);
app.listen(PORT, () => console.log("Listening on port " + PORT + "."));
var Dictionary = require("oxford-dictionary-api");
var app_id = "ed07b36c";
var app_key = "3fe0e2f2f85f13cbfaa906fbd2d16a98";
var dict = new Dictionary(app_id, app_key);
dict.find("hello",function(error,data){
  if(error)
    return console.log(error);
  else
   var definition = data["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][0]["definitions"][0];
   return console.log(definition);
  });
