/**
 * AULA 5 - Desafio JS
 * 
 * Basicamente um CRUD com um objeto JS
 */

// Object 
var Student = function (id, name, birthdate, nationality, gpa, isEnrolled) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.nationality = nationality;
    this.gpa = gpa;
    this.isEnrolled = isEnrolled;
};


// CREATE
var student1 = new Student(1, "Jorge X", "12/03/99", "Russian", 4.0, false);
var student2 = new Student(2, "Maria Y", "18/08/02", "Vietnamese", 3.5, true);
var student3 = new Student(3, "Tanaka Z", "25/07/87", "Japanese", 3.9, true);

var students = new Array(student1, student2);


students.push(student3);

// READ
console.log(students);
console.log(students[0]);

// gets a Student from Students by its ID
function studentsGetStudent(students, id) {
    if (students != null && (id) <= students.length) {
        return students[id - 1]; // Example: student of ID 3 in slot 2
    }
}

// General Printing function for Student
function studentPrint(student) {
    if (Student != null) {
        console.log(`STUDENT #${student.id} DATA\n`);
    } else {
        console.log("Can't print a NULL object!");
        return;
    }
}

studentPrint(studentsGetStudent(students, 1));

// UPDATE

// DELETE