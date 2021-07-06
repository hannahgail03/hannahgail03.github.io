//Extend the Account class by creating a class called SavingsAccount in a file called savingsaccount.js
class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }
//Getter
    getInterest() {
        return this._interest;
    }

//Setters
    setInterest(interest) {
        if (interest < 0) {
            throw Error("Interest has to be equal or greater than zero");
        }
        this._interest = interest;
    }
 //addInterest
   addInterest() {
        const adtnlInterest =  this._balance * this._interest / 100;
        if (adtnlInterest >0) {
            super.deposit(adtnlInterest);
        }
        return adtnlInterest;
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance;
    }

    endOfMonth() {
        const adtnlInterest = this.addInterest();
        return 'Interest added ' + this.toString() + ' interest: ' + adtnlInterest;
    }
}
