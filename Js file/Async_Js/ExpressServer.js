   const express = require('express');

   const app = express();

   app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  })
   app.get('/about',function(req, res){
       res.sendFile(__dirname + '/about.html');
   })
   app.get('/about-us', function(req,res){
       res.redirect('/about');  // here about is indicates /about page or route, not about file //
   })

   app.use((req, res)=>{
       res.status(404).sendFile(__dirname + '/404.html')
   })

   app.listen(3000, ()=>{
       console.log("Server is listening");
   })


