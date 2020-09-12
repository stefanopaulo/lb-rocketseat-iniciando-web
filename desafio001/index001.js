const name = 'Carlos';
const weight = 84;
const height = 1.88;

const bmi = weight / height ** 2;

if (bmi >= 30) {
    console.log(`${name}, você está acima do peso.`);
} else {
    console.log(`${name}, você não está acima do peso.`);
}
