const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    },(err,db)=>{
    if(err) throw err;
    console.log("Conncted Successfully");
})