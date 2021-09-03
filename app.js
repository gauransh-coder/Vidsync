require('dotenv').config();
const Pusher = require('pusher');
const pusher = new Pusher({
  appId: process.env.APP_ID,
  key: process.env.MY_API_KEY,
  secret: process.env.SECRET,
  cluster: "ap2",
  useTLS: true
});

// var io = require('socket.io')(https);


var express = require('express')
const http = require('http');
// make sure you keep this order
var app = express();


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  });



app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});

bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
    app.post('/', function (req, res){
        res.send('{"state" : "'+ req.body.state +'"}');
        console.log((req.body).state);        // there was a .body after req; actual -> console.log(JSON.stringify(req.body));
        //console.log('req received');
        //res.sendStatus(200);

        pusher.trigger("my-channel", "my-event", {
      message: (req.body).state
    });


    });
