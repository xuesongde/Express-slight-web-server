# Express-slight-web-server
A slight web server based on express

Use this server connect mongo DB database 

Mongo DB.Atlas first name: Songde, last Name: Xue, Pass: asd@3344525

Database username: songde password: songde123

Connection code like this:
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://songde:<password>@cluster0-p2so2.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
