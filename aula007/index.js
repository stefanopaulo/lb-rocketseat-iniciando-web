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
        studentsGrade: 2
    }
];

const classStudentsB = [
    {
        name: 'João',
        studentsGrade: 10
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
    return (students[0].studentsGrade + students[1].studentsGrade + students[2].studentsGrade) / 3;
}

const classAvgA = calculateAvg(classStudentsA);
const classAvgB = calculateAvg(classStudentsB);

function display(avg, classStudents) {
    if (avg > 6) {
        console.log(`A média da turma ${classStudents} foi de ${avg} Parabéns!`);
    } else {
        console.log(`A média da turma ${classStudents} foi de ${avg}`);
    }
}

display(classAvgA, 'A');
display(classAvgB, 'B');
