const express = require('express');
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;
const hbs = require('hbs')

app.use(express.static('public'))

//define paths for express configs
const publicDirectoryPath = path.join(__dirname,'../../desloubser/public');
console.log(publicDirectoryPath)



app.get("/",(req,res)=>{
	//res.send("Hallo")
	res.render("index.html")
})

app.listen(port, function (){
    console.log("Server is running "+ port );
});
