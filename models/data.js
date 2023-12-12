const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  FName: String,
  LName: String,
  Deparment: String,
  Courses: [String],
  CGPA: Number,
});

const stdModel = mongoose.model("StudentInfo", StudentSchema);

const create = async (FName, LName, Deparment, Courses, CGPA) => {
  console.log("Student Data Created");
  let std = new stdModel();
  std.FName = FName;
  std.LName = LName;
  std.Deparment = Deparment;
  std.Courses = Courses;
  std.CGPA = CGPA;
  await std.save();
  return std;
};

const READ = async () => {
  console.log("Data Read");
  let students = await stdModel.find();
  return students;
};

const Delete = async (id) => {
  console.log("Deleted Data");
  let toDelete = await stdModel.findByIdAndDelete(id);
  return toDelete;
};

const Update = async (id, FName, LName, Deparment, Courses, CGPA) => {
  console.log("Student Data Updated");
  let std = await stdModel.findById(id);
  std.FName = FName;
  std.LName = LName;
  std.Deparment = Deparment;
  std.Courses = Courses;
  std.CGPA = CGPA;
  await std.save();
  return std;
};

module.exports.create = create;
module.exports.READ = READ;
module.exports.Delete = Delete;
module.exports.Update = Update;