const {MongoClient,ObjectID} = require('mongodb');
var url = "mongodb://localhost:27017/demo";

MongoClient.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    },(err,db)=>{
    if(err) throw err;
    console.log("Conncted Successfully");
})