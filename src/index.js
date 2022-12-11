const express = require("express");
const { createServer } = require("http");
const realtimeServer = require('./realtimeServer.js')
const path = require("path");
const cookieParser = require("cookie-parser")

const app = express();
const httpServer = createServer(app);

//? settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser())

//? routes
app.use(require("./routes"));

//?Public
app.use(express.static(path.join(__dirname, "public")));


//? Levanto el servidor

httpServer.listen(app.get('port'), () => console.log(`app listening on port ${app.get('port')}`))

//? Llamo al servidor de socket.io
realtimeServer(httpServer);
