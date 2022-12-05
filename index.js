const express=require('express');
const app=express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors=require('cors');
const port=process.env.PORT||5000;
require('dotenv').config()


//medile were
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5gquyue.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run(){
    const serviceCollection = client.db("education-hub").collection("services");
    try{
        

    }
    finally{

    }

}
run().catch(error=>console.error(error))



app.get('/',(req,res)=>{
    res.send('your server is running')
})

app.listen(port,()=>{
    console.log(`your server is running on ${port}`)
})