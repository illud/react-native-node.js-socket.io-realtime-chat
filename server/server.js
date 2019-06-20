const app = require("express")()
const bpdyParser = require("body-parser")
const cors = require("cors")
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
  console.log("connected")
  
  socket.on('disconnect', function () {

  });


  socket.on("channel1", function (msg) {
    console.log(msg.message)
    io.emit("channel1", {message: "new message"})
  })


});



app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
})


http.listen(3000, '192.168.11.65', (err, req) => {

})