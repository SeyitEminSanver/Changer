import express from 'express'
import {PORT} from './config.js'
import morgan from "morgan";
import userRoutes from "./routes/users.routes.js"

const app=express()

app.use(morgan('dev'))
app.use(express.json());
app.use(userRoutes);
app.listen(PORT);
console.log("server on port",PORT);
