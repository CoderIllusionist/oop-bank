class Account {
    constructor(name, balance, creditLimit) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
    }
    makeDeposit(amount) {
        if (amount < 0) {return};
        this.balance = this.balance + amount;
        return this.balance;
    }
    makeWithdrawal(amount) {
        if(amount > this.balance && amount > this.creditLimit) {return};
        if(amount > 5000) {return};
        this.balance = this.balance - amount;
    }
}

module.exports = Account;
