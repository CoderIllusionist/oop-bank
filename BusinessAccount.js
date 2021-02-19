class BusinessAccount {
    constructor(name, balance, creditLimit, sepaPermission) {
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
        this.sepaPermission = sepaPermission;
    }
    makeDeposit(amount) {
        if (amount < 0) {return};
        this.balance = this.balance + amount;
        return this.balance;
    }
    makeWithdrawal(amount) {
        if(amount > this.balance && amount > this.creditLimit) {return};
        if(amount > 20000) {return};
        this.balance = this.balance - amount;
    }
    sepaInvoice(amount) {
        if (!this.sepaPermission) {return};
        if (amount < 0) {return};
        const minusOnePercent =  amount - (amount * .01)
        this.balance = this.balance + minusOnePercent;
        return this.balance;
    }
}

// Export your class here as module.exports = MyClass
module.exports = BusinessAccount;


