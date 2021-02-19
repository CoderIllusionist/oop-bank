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

class BusinessAccount extends Account() {
    constructor(name, balance, creditLimit) {
        super();
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
const businessAccount = new BusinessAccount('icasa', 500000, 1000000);
console.log(businessAccount.this.balance)
businessAccount.makeWithdrawal(20001)
console.log(businessAccount.this.balance)
module.exports = Account;
