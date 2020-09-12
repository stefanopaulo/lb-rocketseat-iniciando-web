const students = [
    {
        name: 'Mayk',
        studentsGrade: 9.8
    },
    
    {
        name: 'Diego',
        studentsGrade: 10
    },

    {
        name: 'Pedro',
        studentsGrade: 3
    }
];

const avg = (students[0].studentsGrade + students[1].studentsGrade + students[2].studentsGrade) / 3;

console.log(avg.toFixed(2));
