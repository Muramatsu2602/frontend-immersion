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
var student1 = new Student(1, "Jorge A", "12/03/99", "Russian", 4.0, false);
var student2 = new Student(2, "Maria B", "18/08/02", "Vietnamese", 3.5, true);
var student3 = new Student(3, "Tanaka C", "25/07/87", "Japanese", 3.9, true);
var student4 = new Student(4, "Yoyo D", "10/09/90", "Brazilian", 10.0, false);

var students = new Array(student1, student2);

// adding a few more with push (like a stack)
students.push(student3);
students.push(student4);

// READ
console.log(students);
console.log(students[0]);

// gets a Student from Students by its ID
function studentsGetStudent(students, id) {
    if (students !== null && (id) <= students.length) {
        return students[id - 1]; // Example: student of ID 3 in slot 2
    }
    return null;
}

// General Printing function for Student
function studentPrint(student) {
    if (student !== null) {
        console.log(`-----------\nSTUDENT #${student.id} DATA\n`);
        console.log(`Name:\t${student.name}\n`);
        console.log(`Birthdate:\t${student.birthdate}\n`);
        console.log(`Nationality:\t${student.nationality}\n`);
        console.log(`GPA:\t${student.gpa}`);
        console.log(`Is Enrolled?:\t${student.isEnrolled}\n`);
    } else {
        console.log("Can't print a NULL object!");
        return;
    }
}

// printing all students
function studentsPrintAll(students) {
    if (students !== null && students.length > 0) {
        console.log("\t\t=======PRINTING ALL STUDENTS=======\n");
        for (var i = 0; i < students.length; i++) {
            studentPrint(students[i]);
        }
    }
}

// studentPrint(studentsGetStudent(students, 1));
studentsPrintAll(students);

// UPDATE
function studentUpdateField(students, id, field, content) {
    if (students !== null && id >= 1 && field !== '') {
        const index = id - 1; // because arrays start at 0

        if (students[index].hasOwnProperty(field)) { // testing if field is valid
            students[index][field] = content;
        }
    } else {
        console.log(`ERROR WHEN UPDATING FIELD OF #${students[id].id} STUDENT`);
    }
}

studentUpdateField(students, 2, "nationality", "Belarussian");
studentUpdateField(students, 2, "gpa", 1.9);
studentUpdateField(students, 4, "isEnrolled", true);

studentPrint(studentsGetStudent(students, 2));
studentPrint(studentsGetStudent(students, 4));

// DELETE
function studentDelete(students, id) {
    if (students !== null && id >= 1) {
        const index = id - 1;

        // testing if such id was not already deleted
        if (students[index] === null) {
            console.log(`Student of ID:${id} was not found, therefore cannot be deleted!`);
            return;
        }
        students[index] = null;
    }
}

studentDelete(students, 2);
studentDelete(students, 9);

studentPrint(studentsGetStudent(students, 2));