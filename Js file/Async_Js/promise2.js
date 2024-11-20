const students = [
    {
        name: "Babai", age: 25
    },
    {
        name: "Mohor", age: 26
    }
]

function enrollStudents(student, fetch_students) {
    setTimeout(() => {
        students.push(student);
        console.log("Student has been enrolled");
        
    }, 1000)

    fetch_students();

}

function fetchStudents() {
    setTimeout(() => {
        console.log("Fetching all the students");
        console.log(students);
    }, 5000)
}

enrollStudents({ name: "Sapta", age: 30 }, fetchStudents);
