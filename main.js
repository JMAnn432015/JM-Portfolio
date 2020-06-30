const express = require('express');
const app = express();
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

let port = process.env.PORT || 8000;

let urlencodedParser = bodyParser.urlencoded({ extended: false })

let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: 'jmmonacera@gmail.com',
       pass: 'annmahal'
    }   
});

app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/portfolio',(req,res)=>{
    res.render('portfolio');
});

app.get('/blog',(req,res)=>{
    res.render('blog');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.post('/mail', urlencodedParser, (req,res)=>{
    const message = {
        to: 'jmannacera@gmail.com',         // List of recipients
        subject: req.body.subject, // Subject line
        text: req.body.message // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
    res.render('contact');
});

app.listen(port,(err)=>{
    if(err) throw err;
    console.log('Listening at port 8000');
});