var response="hello";
var wit = require('node-wit');
var fs = require('fs');
var ACCESS_TOKEN = ACCESS_TOKEN;
var serialport= require('serialport')
var SerialPort =serialport.SerialPort
var serialPort = new SerialPort("/dev/ttyACM0",{
baudrate: 9600,
parser: serialport.parsers.readline("\n")
});




serialPort.on('open',function () {
console.log('open');



serialPort.on('data',function(data){
console.log("data recieved "+data+"\n");


});


});

 
  var stream = fs.createReadStream('sample.wav');
  wit.captureSpeechIntent(ACCESS_TOKEN, stream, "audio/wav", function (err, res){
      console.log("Response from Wit for audio stream: ");
      if (err) console.log("Error: ", err);
      response=res.outcomes[0].intent;
serialPort.write(response+"\n",function(err,resp){
console.log("asdc");

});
      console.log(response);2
      
  });




