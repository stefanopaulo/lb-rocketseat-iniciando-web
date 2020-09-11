// Criar um programa que calcula a média
// das notas entre os alunos
// exibir mensagem do cálculo da média

const student1 = 'Mayk';
const studentsGrade1 = 9.8;

const student2 = 'Diego';
const studentsGrade2 = 10;

const student3 = 'Valeska';
const studentsGrade3 = 2;

const avg = (studentsGrade1 + studentsGrade2 + studentsGrade3) / 3;

// se a média for maior que 5 parabenizar a turma
if (avg > 5) {
    console.log(`Média: ${avg.toFixed(2)} Parabéns!`);
} else {
    console.log(`Média: ${avg.toFixed(2)}`);
}
