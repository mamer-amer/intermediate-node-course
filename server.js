const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
// require('../intermediate-node-course/mongodb')
const User = require('../intermediate-node-course/models/User')

var url = "mongodb://localhost:27017/demo";
const port=8000;
const app= express();
mongoose.connect(url,{useUnifiedTopology: true,
  useNewUrlParser: true,useCreateIndex:true})

app.use(bodyParser.json());


// CREATE
app.post('/users',async (req,res)=>{
  console.log(req.body)

  const user = new User(req.body);
  const userObject = await user.save();
  if(userObject) res.status(200).send(userObject)
  res.send(500)

  
})

app.route('/users/:id')
// READ
.get(async (req,res)=>{
  const id = req.params.id;
  const user = await User.findById(id)
  res.send(user)
})
// UPDATE
.put(async (req,res)=>{
  console.log(req)
  const updatedUser = await User.findByIdAndUpdate({_id:req.params.id,})
  res.send(updatedUser)

})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})


app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})