import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
const app = express();
app.use(express.json()); // allows us to parse imcoming requests:req.body

dotenv.config(); // At the top of your index.js or server.js
const PORT = process.env.PORT || 3000;
app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})

