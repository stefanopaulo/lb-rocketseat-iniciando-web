const classStudentsA = [
    {
        name: 'Mayk',
        studentsGrade: 6
    },

    {
        name: 'Diego',
        studentsGrade: 10
    },

    {
        name: 'Josivaldo',
        studentsGrade: 8
    }
];

const classStudentsB = [
    {
        name: 'João',
        studentsGrade: 7
    },

    {
        name: 'Robson',
        studentsGrade: 7
    },

    {
        name: 'Cleiton',
        studentsGrade: 3
    }
];

function calculateAvg(students) {
    let sum = 0
    for (let s of students) {
        sum += s.studentsGrade;
    }

    return sum / students.length;
}

const classAvgA = calculateAvg(classStudentsA);
const classAvgB = calculateAvg(classStudentsB);

function display(avg, classStudents) {
    if (avg > 6) {
        console.log(`A média da turma ${classStudents} foi de ${avg.toFixed(2)} Parabéns!`);
    } else {
        console.log(`A média da turma ${classStudents} foi de ${avg.toFixed(2)}`);
    }
}

display(classAvgA, 'A');
display(classAvgB, 'B');
