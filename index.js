// const express=require('express')
// const app=express();

// app.get((''),(req,res)=>{
//     // console.log("data send by browser ", req.query.name);
//     // res.send("<h1>welcome </h1>"+ req.query.name);
//     res.send(`
//     <h1>Welcome this is home page</h1>
//     <a href="/about" >Go to about</a>

//     `);
// })
// app.get(('/about'),(req,res)=>{
//     res.send(`
//     <h4>Username <input type="text" placeholder="Enter username here" /> </h4>
//     <button>Submit</button>
//     <a href="/" >Go to Home page</a>
//     `)
// })

//  rendering json data
// app.get(('/contact'),(req,res)=>{
//     res.send([
//         {
//             name:"Anubhav",
//             age:'20'
//         },
//         {
//             name:"Nishant",
//             age:'21'
//         }
//     ])
// })

// app.get('/help',(req,resp)=>{
//     resp.send("This is help page");
// })

// app.listen(5000);

// const { log } = require('console');
// const express=require('express');
// const path=require('path');

// const app=express();
// const publicpath=path.join(__dirname,'public');
// // app.use(express.static(publicpath));
// console.log(publicpath);

// app.set('view engine','ejs');

// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicpath}/index.html`);
// })
// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicpath}/about.html`);
// })
// app.get('/help',(req,resp)=>{
//     resp.sendFile(`${publicpath}/help.html`);
// })

// app.get('/profile',(_,resp)=>{
//     const user={
//         name:"Peter",
//         enroll:"20UCS",
//         branch:"CSE",
//         city:"Ayodhya",
//         college:"NITA",
//         country:'USA',
//         skills:['php','js','c++','node','javascript']
//     }
//     resp.render('profile',{user});
// })

// app.get('/login',(_,resp)=>{

//     resp.render('login');
// })

// app.get('*',(req,resp)=>{
//     resp.sendFile(`${publicpath}/nopage.html`);
// })

// app.listen(5000);

// Middleware

// const express=require('express')
// const reqfilter=require('./middleware.js')
// const app=express();
// const route=express.Router();
// route.use(reqfilter)

// // this is used when we want to apply middleware on each page or routes
// // app.use(reqfilter);

// app.get('/',(req,resp)=>{
//     resp.send('This is home page');
// })

// // pass second parameter as reqfilter to apply this middleware on the single page
// app.get('/user',(req,resp)=>{
//     resp.send('This is users page');
// })
// // app.get('/about',reqfilter,(req,resp) aise ek ek krke middleware apply krna sahi nahi hai
// // jin jin route ke upr middleware apply krna hai wha wha route.get use kro instead of app.get
// route.get('/about',(req,resp)=>{
//     resp.send('This is about page');
// })
// route.get('/contact',(req,resp)=>{
//     resp.send('This is contact page');
// })

// app.use('/',route);
// app.listen(5000);

// connecting mongo db with node js
// const {MongoClient}=require('mongodb');
// const url="mongodb://localhost:27017";
// let client=new MongoClient(url);
// const databasename="ecom";

// async function getdata()
// {
//     let result=await client.connect();
//     db=result.db(databasename);
//     collection=db.collection("products");
//     let response= await collection.find({}).toArray();
//     console.log(response);
// }

// getdata();

// read data from mongo db

// const {MongoClient}=require('mongodb');
// const url='mongodb://localhost:27017';
// const databasename='ecom';
// const client=new MongoClient(url);

// async function dbconnect()
// {
//     let result=await client.connect();
//     db=result.db(databasename);
//     return db.collection("products");
// }

// const main=async ()=>{
//     let data=await dbconnect();
//     data=await data.find().toArray();
//     console.warn(data);
// }
// main();

// const dbconnect=require('./mongodb')

// const main=async ()=>{
//     let data=await dbconnect();
//     data=await data.find().toArray();
//     console.warn(data);
// }
// main();

// mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecom");

// schema is used to define the field values in our database
const pdtschema = new mongoose.Schema({
  Name: String,
  Brand: String,
  Price: Number,
  category: String,
});

const saveinDB = async () => {
  // model is to connect node js with database
  const pdt = mongoose.model("products", pdtschema);
  let data = new pdt({
    Name: "max 100",
    Brand: "micromax",
    Price: 2200,
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

// saveinDB();

const updateinDB = async () => {
  const pdt = mongoose.model("products", pdtschema);
  let data = await pdt.updateOne(
    { Name: "note 10" },
    { $set: { Price: 22000,Brand:"mi" } }
  );
  console.log(data);
};

// updateinDB();

const deleteinDB=async ()=>{
    const pdt=mongoose.model('products',pdtschema);
    const data=await pdt.deleteOne({Name:'max 100'});
    console.log(data);
}

// deleteinDB();

const findinDB=async ()=>{
    const pdt=mongoose.model('products',pdtschema);
    const data=await pdt.find({Name:'max 1'});
    console.log(data);
}

// findinDB(); 