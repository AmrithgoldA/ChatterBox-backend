const express = require('express');
const dotenv = require('dotenv')

//to import router 
const { router } = require('./src/Route');

const app = express();

const PORT = process.env.PORT || 3000;

//**middleware
app.use(express.json())
app.use(function (request, response, next) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Headers", "content-type");
  response.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
  next();
});


//to check if backend is running
// app.get('/',(request,response) =>{
//     response.send('<p>hi</p>');
// })

app.use('/chatApp',router);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})
