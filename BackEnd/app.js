const  express = require('express');//use for http routes
const  bodyparser = require('body-parser');//communicate with frontend by nodejs
const  morgan = require('morgan');//middlware ,simplifiesd process
const  mongoose = require('mongoose');//mongodb agent ,act as interface
const cors=require('cors');

const confiq = require('./confiq'); //import confiq

const app= express();
//mongoose.connect('mongodb://localhost/meandb');
mongoose.connect('mongodb://localhost/meandb',err => {//connect to databse
//mongoose.connect(confiq.database,err => {//connect to databse

    if(err){
        console.log(err);
    }else{
        console.log("connected to databse");
    }

});



app.use(bodyparser.json());//json format
app.use(bodyparser.urlencoded({extended:false}));//url type =>data,image


// app.post('*', (res, req) => {//all request
//     console.log("app *  ");
//     console.log('body: ', req.body);
//     console.log('query: ', req.query);
// });


app.use(morgan('dev'));//request handled by an interface

app.use(cors());//preventing erros for cross broweser resourse//diffrent domain access

app.get('/',(req,res,next) => {
    res.json({
    user:'Harsard'
    });
});
//defining  user routes prefix
const userRoutes=require('./router/account');
app.use('/api/accounts',userRoutes);

app.listen(confiq.port,(err) => {//create server
    console.log("port "+confiq.port);
});

