const dbconnect=require('./mongodb')

const updatedata=async ()=>{
    let data= await dbconnect();
    let result=await data.updateOne({Name:"max pro 5"},{$set:{Name:"max pro 5"}});
    console.warn(result); 
}
updatedata();