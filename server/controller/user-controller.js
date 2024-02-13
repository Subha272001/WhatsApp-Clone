import User from '../model/User.js'

export const addUser = async (request,response)=>{
 try{
     const exist = await User.findOne({ sub: request.body.sub});
     if(exist){
      response.status(200).json({msg: 'user already exist'});
      return;
     }
     const newUser = new User(request.body);
     await newUser.save();
     return response.status(200).json(newUser);
 }catch(err){
      return response.status(500).json(err.message);
 }

}

export const getUsers = async(request,response)=>{
  try{
      const users = await User.find({});
      return response.status(200).json(users);
  }catch(err){
      return response.status(500).json(err.message);
  }
}