const express = require('express')
const app = express()
const router = express.Router()
const http= require('http');
const server=http.createServer(app);
const morgan= require('morgan');
const cors=require('cors');

const {Server}=require('socket.io');
const io = new Server(server,{
   cors: {
    origin:'http://localhost:3000',
   } 
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });


const comandas=require("./routes/comandas");
app.use("/comandas",comandas)






//socket io config

io.on('connection',(socket)=>{
    console.log(socket.id);
    socket.on('message',message =>{
        
        socket.broadcast.emit('message', message)
    })

})






// Server listen



server.listen(3001,()=>{
    console.log("servidor funcionando puerto 3001");
})