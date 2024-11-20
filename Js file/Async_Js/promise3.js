

const students = [
    {
        name: "Babai", age: 25
    },
    {
        name: "Mohor", age: 26
    }
]


function enrollstudentpromise(student, boolVal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (boolVal == true) {
                students.push(student)
                console.log("Student is getting enrolled");
                resolve();

            }
            else {
                reject();
            }

        }, 5000)

    })
}

function fetchStudents() {
    setTimeout(() => {
        console.log("Fetching all the students");
        console.log(students);
    }, 2000)
}

function StudentnotEnrolled() {
    setTimeout(() => {
        console.log("Students not enrolled");
    }, 2000);
}

const promise = enrollstudentpromise({ name: "sapta", age: 26 }, true);

promise.then(fetchStudents).catch(StudentnotEnrolled);


