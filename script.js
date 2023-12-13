document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('http://localhost:5000/studentData');
        const data = await response.json();
        
        console.log('Fetched data:', data);

        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const studentList = document.getElementById('student-list');

    // Clear any existing data
    studentList.innerHTML = '';

    // Check if data.myData is an array
    if (!Array.isArray(data.myData)) {
        console.error('Data.myData is not an array:', data.myData);
        return;
    }

    // Loop through the data and create list items
    data.myData.forEach(student => {
        const listItem = createListItem(student);
        studentList.appendChild(listItem);
    });
}

function createListItem(student) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span style="font-weight: bold;">ID:</span> ${student._id}
        <span style="margin-left: 10px; font-weight: bold;">Course:</span> ${student.Courses}
        <br>
        <span style="font-weight: bold;">NAME:</span> ${student.FName} ${student.LName}
        <span style="margin-left: 10px; font-weight: bold;">Department:</span> ${student.Deparment}
        <br>
        <span style="font-weight: bold;">CGPA:</span> ${student.CGPA}
        <br>
        <button onclick="deleteStudent('${student._id}')">Delete</button>
        <button onclick="updateStudent('${student._id}')">Update</button>
    `;
    return listItem;
}

async function deleteStudent(studentId) {
    try {
        const response = await fetch(`http://localhost:5000/studentData/delete/${studentId}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.log('Student deleted:', result);
        fetchData();
    } catch (error) {
        console.error('Error deleting student:', error);
    }
}

async function updateStudent(studentId) {
    const newFName = prompt('Enter first name');
    const  newLName = prompt('Enter last name');
    const newCourse = prompt('Enter the new Course:');
    const newdepartment = prompt('Enter the new Department:');
    const newCGPA = prompt('Enter the new CGPA:');
    console.log(studentId);
    
    try {
        const response = await fetch(`http://localhost:5000/studentData/update/${studentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ FName :newFName, LName:newLName,CGPA: newCGPA , Department: newdepartment , Courses: newCourse}),
        });
        const result = await response.json();
        console.log('Student updated:', result);
        fetchData();
    } catch (error) {
        console.error('Error updating student:', error);
    }
}

 async function addStudent() {
    const FName = prompt('Enter the first name:');
    const LName = prompt('Enter the last name:');
    const Courses = prompt('Enter the course:');
    const Deparment = prompt('Enter the department:');
    const CGPA = prompt('Enter the CGPA:');
    
    try {
        const response = await fetch('http://localhost:5000/studentData/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ FName, LName, Courses, Deparment, CGPA }),
        });
        const result = await response.json();
        console.log('Student added:', result);

        // Refresh the data after addition
        fetchData();
    } catch (error) {
        console.error('Error adding student:', error);
    }
}