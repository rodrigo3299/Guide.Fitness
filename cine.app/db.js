import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://rodrigo:<db_password>@cluster0.mx80r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}