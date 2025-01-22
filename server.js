import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import { createServer } from 'http'
import AppRouter from './routes/index.js'
import { logErrors,errorHandler} from './middlewares/hanldeErrors.js'
import { error } from 'console'

const port = 3000 || process.env.PORT
//Express
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Ejecutamos CORS, primero crearemos las url a las que le daremos acceso
// const whitelist = ['http://localhost:3000','https://femepashidi.siradiacion.com.mx/','https://www.femepashidi.com.mx','http://127.0.0.1'];
// const options ={
//   origin: (origin,callback)=>{
//     if(whitelist.includes(origin) || !origin){
//       callback(null,true);
//     }else{
//       callback(new Error('No permitido'));
//     }
//   }
// }

// app.use(cors(options));

// para todas las url
app.use(cors());
//Socket.io
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Asegúrate de que sea la URL de tu frontend
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Usuario conectado', socket.id);

  socket.on('disconnect', () => {
    console.log('Usuario desconectado', socket.id);
  });
});

//Rutas
AppRouter(app)

app.use(logErrors)
app.use(errorHandler)



app.use('/uploads', express.static('uploads'))







httpServer.listen(3000,()=>{
  console.log(`Servidor iniciado en puerto :${port}`)
})
