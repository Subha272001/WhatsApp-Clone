import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async ()=>{
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}%40123@whatsapp.bcveted.mongodb.net/?retryWrites=true&w=majority`

  try{
    await mongoose.connect(URL);
    console.log('Successfully connected');
  }catch(err){
      console.log('Error while connecting with the database', err.message);
  }
}

export default Connection;