const express = require('express');
const app = express();
const authroute = require('./router/auth.router');
const contactroute = require('./router/contact.router');
const connectDB = require('./utils/Db');
const dotenv = require('dotenv');
const errorMiddleware = require('./middlewares/error.middleware');

//Environment variables
dotenv.config({ 
    path: './.env'
});

//Middlewares
app.use(express.json({
    limit:"16kb",
}));


//Routers
app.use('/api/auth', authroute);
app.use('/api/form', contactroute);

app.use(errorMiddleware);

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 5000 , () =>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    }) 
})
.catch((err) =>{
    console.log("MongoDb connection failed !!!" , err);
});