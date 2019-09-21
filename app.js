const express = require('express');
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;
const hbs = require('hbs');
const bodyParser = require ('body-parser');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : true}))

//define paths for express configs
const publicDirectoryPath = path.join(__dirname,'../../desloubser/public');
console.log(publicDirectoryPath)



app.get("/",(req,res)=>{
	//res.send("Hallo")
	res.render("index.html")
})

app.post("/email", (req,res)=> {
	
	var email = req.body.email;
	var message = req.body.message;

	 sgMail.send({
        to : 'desloubser2@gmail.com',
        from : 'desloubser2@gmail.com',
        subject : 'Message from your app!!!',
        text : message + " \n FROM : " + email
    })

	 res.redirect("/")

	 
	
})

app.listen(port, function (){
    console.log("Server is running "+ port );
});
