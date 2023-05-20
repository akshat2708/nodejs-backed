const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
async function getdata()
{
    let result = await client.connect();
    let db=result.db('cyberpunk');
    let collection=db.collection('registration');
    console.log(collection.find({}).toArray())
    
}
getdata();