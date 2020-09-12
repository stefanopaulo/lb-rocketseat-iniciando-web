const name = 'José';
const gender = 'M';
const age = 65;
const contribution = 37;

const sum = age + contribution;

if (gender === 'F') {
    if (sum >= 85) {
        console.log(`${name}, você pode se aposentar.`);
    } else {
        console.log(`${name}, você ainda não pode se aposentar.`);
    }
}

if (gender === 'M') {
    if (sum >= 95) {
        console.log(`${name}, você pode se aposentar.`);
    } else {
        console.log(`${name}, você ainda não pode se aposentar.`);
    }
}
