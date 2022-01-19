const User = require('../models/User');

module.exports.createUser = async(req, res)=>{
  try {
    const user = await new User(req.body);
    res.status(201).send(user)    
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.showUsers = async(req, res)=>{
  try {
    const users = await User.findAll();
    res.status(201).send(users)    
  } catch (error) {
    res.status(400).send(error.message)
  }
}


module.exports.showUser = async(req, res)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(201).send(user)    
  } catch (error) {
    res.status(400).send(error.message)
  }
}