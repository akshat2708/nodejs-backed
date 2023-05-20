const { MongoClient } =require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const database = 'cyberpunk'
async function gdata() {
    let output = await client.connect();
    let db = output.db(database);
    let collection = db.collection('registration');
    let result = await collection.find({}).toArray();
    console.log(result);
}
gdata();