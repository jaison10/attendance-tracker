var express = require('express');
var Converter = require("csvtojson").Converter;

// create a new converter object
var converter = new Converter({});

// call the fromFile function which takes in the path to your 
// csv file as well as a callback function
converter.fromFile("./Contact Information.csv",function(err,result)
{
  console.log("hellaa");
  if(err){
    console.log("An Error Has Occured");
    console.log(err);  
  } 
  if(typeof result==='undefined' || result===null)
  {
    console.log("null");
  }
    // result stored in variable json. 
  
    var json = result;
    // log our json to verify it has worked
    console.log(json);
});
//const URL="localhost:";
app = express();

const PORT= 3000;

const server= app;

server.listen(3000, ()=> {
    console.log(`server started on port ${PORT}`);
});

server.get(`/:id`,(req,res)=>{
  const searchstudent= _.find(json, json => json.id===req.params.id)
  if(searchstudent)
  {
    console.log("GOT IT");
  }
});

