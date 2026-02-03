import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
// const express = require('express')
const app = express();


//Basic Configuration
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//import the routes
import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

//Mount the routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/healthcheck", healthCheckRouter);


// Cors Configuration
app.use(cors({
    origin : process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials:true,
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send(`My name is ${process.env.name}!`)
})


export default app;
