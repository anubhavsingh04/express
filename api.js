const express=require('express')
const dbconnect=require('./mongodb')
const mongodb=require('mongodb');

const app=express();

app.use(express.json());

app.get('/',async(req,resp)=>{
    let data=await dbconnect();
    data=await data.find().toArray();
    resp.send(data);
})

app.post('/',async (req,resp)=>{

    // console.log(req.body);
    let data=await dbconnect();
    let result=await data.insertOne(req.body);
    resp.send(result);
})

app.put('/:Name',async(req,resp)=>{
    
    let data =await dbconnect();
    let result=data.updateOne(
        {Name:req.params.Name},
        {$set: req.body}
    )
    resp.send({result:"updated"});   
})

app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id);
    let data=await dbconnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId('646f53a54f45989b90eed2f5')});
    resp.send(result);   
})  

app.listen(5000);