var express = require('express');

const csvFilePath="./Contact_Information.csv";
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

app = express();

const PORT= 3000;
const server= app;
server.listen(3000, ()=> {
    console.log(`server started on port ${PORT}`);
});
server.get(`/`,(req,res)=>{
    console.log("GOT IT");
});
server.get(`/:id`,(req,res)=>{
  const searchstudent= _.find(json, json => json.id===req.params.id)
  if(searchstudent)
  {
    console.log("GOT IT");
  }
});

