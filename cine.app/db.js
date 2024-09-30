import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.7txhn.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}