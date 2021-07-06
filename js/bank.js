"use strict";
class Bank {
    constructor() {
        this._accounts = [];
    }

    static _nextNum = 0;
    static getnextNum() {
    return Bank._nextNum++;
    }

    addAccount() {
        const nextNum = Bank.getnextNum(); 
        const newAccount = new Account(nextNum);
        this._accounts[nextNum] = newAccount;
        return nextNum;
    }

    addSavingsAccount(interest) {
        const nextNum = Bank.getnextNum(); 
        const newAccount = new SavingsAccount(nextNum, interest);
        this._accounts[nextNum] = newAccount;
        return nextNum;
    }

    addCheckingAccount(overdraft) {
        const nextNum = Bank.getnextNum(); 
        const newAccount = new CheckingAccount(nextNum, overdraft);
        this._accounts[nextNum] = newAccount;
        return nextNum;
    }

    closeAccount(number) {
        this._accounts[number] = null;
    }

    reportAccount() {
        return this._accounts.filter(x => !!x).map(x => x.toString()).join('\n');
    }

    endOfMonth() {
        return this._accounts.filter(x => !!x).map(x => x.endOfMonth()).join('\n');
    }
}

//Bank Test
