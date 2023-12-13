const Data = require('../models/data');

const home = async (req , res) => {
    res.status(200).send();
}

const studentData = async (req , res) => {
    const myData = await Data.READ({});
    res.status(200).json({myData});
}

const add = async (req, res) =>{
        const { FName, LName, Deparment, Courses, CGPA } = req.query;

        const added = await Data.create(FName, LName, Deparment, Courses, CGPA);
        
        res.status(200).json({ added });
}

const dlt = async (req , res) => {
    const id = req.query.id;
    const del = await Data.Delete(id)
    res.status(200).json({del});
 }


const update = async (req, res) => {
    const {id, FName, LName, Deparment, Courses, CGPA } = req.query;

        const updated = await Data.Update(id,FName, LName, Deparment, Courses, CGPA);
    res.status(200).json({updated});
}

module.exports = {home , studentData,dlt ,add,update};