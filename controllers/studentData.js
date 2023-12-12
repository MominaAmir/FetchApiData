const Data = require('../models/data');

const home = async (req , res) => {
    res.status(200).send(`<h1>This is a Home page </h1>
    <h3>To GET</h3>
    <p>Base Url/studentData</p>
    <h3>To Add</h3>
    <p>Base url/studentData/add?FName=name&LName=lname&Deparment=dpt_name&Courses=courseName&CGPA=gpa
    </p>
    <h3>To Update</h3>
    <p>Base Url/studentData/update?id=your_id&FName=name&LName=lname&Deparment=dpt_name&Courses=courseName&CGPA=gpa</p>
    <h3>To Delete</h3>
    <h5>you have to pass id of data you want to delete</h5>
    <p>base url/studentData/delete?id= your_id</p>`);
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