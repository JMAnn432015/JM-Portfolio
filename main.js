const express = require('express');
const app = express();
const ejs = require('ejs');

let port = process.env.PORT || 8000;

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

app.listen(port,(err)=>{
    if(err) throw err;
    console.log('Listening at port 8000');
});