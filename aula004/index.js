const age = 17;

function returnAge(age) {
    const condtions = ['Pode entrar...', 'Volte quando fizer 18 anos.', 'Menor de 18 anos... Não pode entrar.'];

    if (age >= 18) return condtions[0];

    if (age > 16) return condtions[1];

    if (age < 17) return condtions[2];
}

const ageResult = returnAge(age);
console.log(ageResult);
