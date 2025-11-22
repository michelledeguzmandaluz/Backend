/*import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import cors from "cors";

//create express app
const app = express();

//Enable cors to frontend
let corsOptions = {
    origin:process.env.ORIGIN
}
//middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next)=>{
   console.log(req.path, req.method);
   next();
})

const port = 2004;

try{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`)
})
}catch(e){
    console.log(e);
}

app.use('/book',bookRoutes);*/


/*import express from "express";
import 'dotenv/config.js';
import studentRoutes from "./routers/StudentRoutes.js";
import cors from "cors";

//create express app
const app = express();

let corsOptions = {
    origin : process.env.ORIGIN
}
//middleware
app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next)=>{
   console.log(req.path, req.method);
   next();
})

const port = 2004;

try{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`)
})
}catch(e){
    console.log(e);
}

app.use('/student',studentRoutes);*/

import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";
import userRoutes from "./routers/UserRoutes.js";
import cors from "cors";

// Create express app
const app = express();

// CORS options
const corsOptions = {
  origin: process.env.ORIGIN || "*" // fallback to allow all if ORIGIN not set
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});



