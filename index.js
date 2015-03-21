
var wit = require('node-wit');
  var fs = require('fs');
  var ACCESS_TOKEN =ACCESS_TOKEN;

  console.log("Sending  audio to Wit.AI");

  var stream = fs.createReadStream('sample.wav');
  wit.captureSpeechIntent(ACCESS_TOKEN, stream, "audio/wav", function (err, res) {
      console.log("Response from Wit for audio stream: ");
      if (err) console.log("Error: ", err);
      var response=res;
      console.log(res,null," ");

  });
