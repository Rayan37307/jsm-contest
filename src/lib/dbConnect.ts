import mongoose from "mongoose";

export async function dbConnect() { 
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
