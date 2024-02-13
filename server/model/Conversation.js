import mongoose from "mongoose";

const ConverstionSchema = new mongoose.Schema({
  members: {
    type:Array
  },
  message:{
    type:String
  }},{
    timestamps: true
  });

  const conversation = mongoose.model('Conversation',ConverstionSchema);
  export default conversation;