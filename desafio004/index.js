const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    addBalance(transaction.type, transaction.value);
}

function addBalance(type, value) {
    if (type === 'credit') {
        user.balance += value;
    }

    if (type === 'debit') {
        user.balance -= value;
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction;
    let higherValue = 0;

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value;
            higherTransaction = transaction;
        }
    }

    return higherTransaction;
}


function getAverageTransactionValue() {
    let sum = 0;

    for (let v of user.transactions) {
        sum += v.value;
    }

    const avg = sum / user.transactions.length;

    console.log(avg.toFixed(1));
}

function getTransactionsCount() {
    let c = 0;
    let d = 0;

    for (let u of user.transactions) {
        if (u.type === 'credit') {
            c++;
        }

        if (u.type === 'debit') {
            d++;
        }
    }

    console.log({ creadit: c, debit: d });
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

getAverageTransactionValue();
getTransactionsCount();
