const mongoose = require('mongoose');
const express = require('express');
const app = express();
const std = require('./routes/Students');
const cors = require('cors');

app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/UniversityData').then(async () => {
    console.log('Connection Created ');
}).catch( (err) => {
    console.log("Error Occur" + err)
})

app.use(express.json());

app.use('/api', std);

const start = async () => {
    try{
        app.listen(5000 , () => {
            console.log(`Yes i am connected`);
        });
    }catch(err) {
        console.log('error occur'+ err)
    }
}

start();