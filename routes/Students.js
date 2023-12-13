const express = require('express');
const router = express.Router();

const {studentData, home , dlt, add,update} = require('../controllers/studentData');

router.route("/").get(home)
router.route('/studentData').get(studentData);
router.route('/studentData/add').post(add);
router.route('/studentData/delete/:studentId').delete(dlt);
router.route('/studentData/update').put(update);

module.exports = router;