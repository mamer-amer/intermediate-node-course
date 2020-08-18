const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
require('../intermediate-node-course/mongodb')
const UserModel = require('../intermediate-node-course/models/User')

const port=8000;
const app= express();

app.use(bodyParser.json());


// CREATE
app.post('/users',(req,res)=>{
  console.log(req.body)
  
  
  
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})


app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})