const dbconnect=require('./mongodb')

const insert= async()=>{
    const db=await dbconnect();
    const result=await db.insertMany(
        [
            {Name:"max 1",brand:"Micromax",Price:"2200"},
            {Name:"max 2",brand:"Micromax",Price:"2300"},
            {Name:"max 3",brand:"Micromax",Price:"2400"}
        ]
    );
    if(result.acknowledged)
    {
        console.log("data inserted");
    }
}
insert();


