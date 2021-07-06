//Extend the Account class by creating a class called CheckingAccount in a file called checkingaccount.js
class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }
    getOverDraft() {
        return this._overdraft;
    }
    setOverDraft(overdraft) {
        if (overdraft < 0) {
            throw Error("Overdraft limit should be greater than zero");
        }
        this._overdraft = overdraft;
    }
    withdraw(amount) {
        if(this._overdraft<amount)
        {
            throw Error("Withdraw amount exceeded your overdraft-limit");
        }
        if (amount <= 0) {
            throw Error("Withdraw amount has to be greater than zero");
        }
        if ((this._balance - amount) < (-1 * this._overdraft)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    endOfMonth() {
        const warning = this.getBalance() < 0 ? 'Warning, low balance ' : '';
        return warning + this.toString();
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance + " overdraft-limit " + this._overdraft;
    }

}
