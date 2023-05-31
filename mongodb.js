const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const databasename='ecom'
const client=new MongoClient(url);

async function dbconnect(){
    const result=await client.connect();
    const db=result.db(databasename)
    return db.collection("products");
} 
module.exports=dbconnect;