import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://vaishnavit006:vee107046@cluster0.yzmmsdt.mongodb.net/Zomat0-Clone').then(()=>console.log("DB Connected"));
}