// Student records stored in JavaScript array
let studentRecords = [];

function createRecord() {
    const name = prompt("Enter Name of Student:");
    const roll = prompt("Enter Roll Number of Student:");
    const dept = prompt("Enter Department of Student:");
    const marks = prompt("Enter Total Marks of Student:");

    // Create a new student record object
    const student = {
        roll: parseInt(roll),
        name: name,
        dept: dept,
        marks: parseInt(marks)
    };

    // Add the new record to the array
    studentRecords.push(student);

    displayOutput("Record Inserted Successfully");
}
function deleteRecord() {
    if (studentRecords.length === 0) {
        displayOutput("No records to delete");
        return;
    }

    // Remove the last record from the array (simulating pop operation)
    studentRecords.pop();

    displayOutput("Record Deleted Successfully");
}

function searchRecord() {
    if (studentRecords.length === 0) {
        displayOutput("No records to search");
        return;
    }

    const roll = prompt("Enter Roll Number of Student:");

    // Search for the record with the given roll number
    const foundRecord = studentRecords.find(record => record.roll === parseInt(roll));

    if (foundRecord) {
        displayOutput(`Roll Number: ${foundRecord.roll}\nName: ${foundRecord.name}\nDepartment: ${foundRecord.dept}\nMarks: ${foundRecord.marks}`);
    } else {
        displayOutput("No such Record Available");
    }
}

function viewAllRecords() {
    if (studentRecords.length === 0) {
        displayOutput("No Record Available");
        return;
    }

    let output = "Index\t\tName\t\tCourse\t\tMarks\n\n";
    studentRecords.forEach((record, index) => {
        output += `${index + 1}\t${record.name}\t${record.dept}\t${record.marks}\n`;
    });

    displayOutput(output);
}

function exit() {
    alert("Exiting the application");
}

function displayOutput(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = message;
}
