const dbconnect=require('./mongodb')
const deletedata=async()=>{
    let data=await dbconnect();
    let result=await data.deleteMany({Name:"max 1"});
    
    if(result.acknowledged)
    {
        console.log("deleted successfully");
    }
}

deletedata();