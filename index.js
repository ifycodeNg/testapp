 const express = require("express")
 const app = express()
 const routes = require('./route/api');
 const cookieParser = require('cookie-parser');
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Authorization, Origin, Content-Type, Accept',
    );
    res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
    next();
  });
  
app.use('/api', routes);
 app.listen(3000, () => {
    console.log("Server is running on port 3000")
 })
 app.get("/", (req, res) => {
    res.send("Hello World")

 })

 app.get("/getusers", (req, res) => { })
