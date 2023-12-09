import express from "express";
import dotenv from "dotenv"
import cors from 'cors'
import workouts from './routes/workouts.js'
import mongoose from "mongoose";
import userRoutes from './routes/user.js'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/workouts', workouts)
app.use('/api/user', userRoutes)

//middleware next -> go to next middleware
app.use( (req, res, next) => {
    console.log(req.path, req.method);
    next()
})


//connect mongodb
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected To Database");
    app.listen(process.env.PORT, () => {
      console.log(`App is Listening on Port: ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}

connectDatabase();





