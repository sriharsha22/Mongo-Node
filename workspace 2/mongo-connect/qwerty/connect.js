const MongoClient = reqiure('momgodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/App', (err, db)=>{
  if(err){
    return console.log("can't connect");
  }
  console.log("connected");
  db.close();
}

);