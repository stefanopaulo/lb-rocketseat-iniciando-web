const users = [
    {
        name: 'Salvio',
        revenue: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },

    {
        name: 'Márcio',
        revenue: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },

    {
        name: 'Lúcia',
        revenue: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

function sumNumbers(numbers) {
    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

function calculateBalance(revenue, expenses) {
    const r = sumNumbers(revenue);
    const e = sumNumbers(expenses);

    return r - e;
}

for (let u of users) {
    const balance = calculateBalance(u.revenue, u.expenses);

    if (balance > 0) {
        console.log(`${u.name} tem saldo POSITIVO de ${balance.toFixed(4)}`);
    } else {
        console.log(`${u.name} tem saldo NEGATIVO de ${balance.toFixed(4)}`);
    }
}
