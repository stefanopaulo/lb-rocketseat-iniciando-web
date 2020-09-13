const classStudentsA = [
    {
        name: 'Mayk',
        grade: 6
    },

    {
        name: 'Diego',
        grade: 1.5
    },

    {
        name: 'Josivaldo',
        grade: 8
    }
];

const classStudentsB = [
    {
        name: 'João',
        grade: 7
    },

    {
        name: 'Robson',
        grade: 7
    },

    {
        name: 'Cleiton',
        grade: 3
    }
];

function calculateAvg(students) {
    let sum = 0
    
    for (let s of students) {
        sum += s.grade;
    }

    return sum / students.length;
}

function sendMessage(avg, classStudents) {
    if (avg > 6) {
        console.log(`A média da turma ${classStudents} foi de ${avg.toFixed(2)} Parabéns!`);
    } else {
        console.log(`A média da turma ${classStudents} foi de ${avg.toFixed(2)}`);
    }
}

function markAsFlunked(student) {
    student.failed = false;
    
    if (student.grade < 6) {
        student.failed = true;
    }
}

function displayDisapproved(student) {
    if (student.failed) {
        console.log(`O aluno ${student.name} está reprovado!`);
    }
}

function checkDisapproved(students) {
    for (let student of students) {
        markAsFlunked(student)
        displayDisapproved(student);
    }
}

const classAvgA = calculateAvg(classStudentsA);
const classAvgB = calculateAvg(classStudentsB);

sendMessage(classAvgA, 'A');
sendMessage(classAvgB, 'B');

checkDisapproved(classStudentsA);
checkDisapproved(classStudentsB);
