// test-conn.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function t(){
  try{
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
    console.log('🔥 MongoDB ok connected');
    process.exit(0);
  }catch(e){
    console.error('❌ conn error:', e);
    process.exit(1);
  }
}
t();
