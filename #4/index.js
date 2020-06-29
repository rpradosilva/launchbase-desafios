const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(typeTransaction, valueTransaction) {
    user.transactions.push({ type: typeTransaction, value: valueTransaction })
    if (typeTransaction == "credit") {
        user.balance = user.balance + valueTransaction
    } else {
        user.balance = user.balance - valueTransaction
    }
}

function getHigherTransactionByType(typeTransaction) {
    for (let transaction of user.transactions) {
        if (transaction.type == typeTransaction) {
            console.log(transaction)
        }
    }
}

function getAverageTransactionValue() {
    let sumTransactionValue = 0
    for (let transaction of user.transactions) {
        sumTransactionValue = sumTransactionValue + transaction.value
    }
    console.log(sumTransactionValue / user.transactions.length)
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type === "credit") {
            count.credit++
        } else {
            count.debit++
        }
    }
    console.log(count)
}

createTransaction("credit", 50);
createTransaction("credit", 120);
createTransaction("debit", 80);
createTransaction("debit", 30);

getHigherTransactionByType("credit")

getAverageTransactionValue()

getTransactionsCount()