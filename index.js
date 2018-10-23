
var Dictionary = require("oxford-dictionary-api");
var app_id = "ed07b36c";
var app_key = "3fe0e2f2f85f13cbfaa906fbd2d16a98";
var dict = new Dictionary(app_id, app_key);
dict.find("hello",function(error,data){
  if(error)
    return console.log(error);
  else
   var definition = data["results"][0]["lexicalEntries"][0]["entries"][0]["senses"][0]["definitions"][0];
   console.log(definition);
  });
