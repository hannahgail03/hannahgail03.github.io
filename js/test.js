    // Account Test
    describe('Account', () => {
        it('getNumber() of the New Account', () => {
            const GailAcct = new Account('123456');
            assert.strictEqual(GailAcct.getNumber(), '123456');
        });

        it('getBalance() shoulbe be Zero', () => {
            const GailAcct = new Account('123456');
            assert.strictEqual(GailAcct.getBalance(), 0);
        });

        it('deposit(5000) for the Account', () => {
            const GailAcct = new Account('123456');
            GailAcct.deposit(5000)
            assert.strictEqual(GailAcct.getBalance(), 5000);
        });
          it('deposit(0) zero amount', () => {
            const GailAcct = new Account('123456');
            assert.throws(() => {GailAcct.deposit(0)}, RangeError,'Deposit amount has to be greater than zero');
        });
        it('withdraw(500) from 5000 should return 4500', () => {
            const GailAcct = new Account('123456');
            GailAcct.deposit(5000)
            GailAcct.withdraw(500)
            assert.strictEqual(GailAcct.getBalance(), 4500);
        });
        it('withdraw(0) zero amount should return an Error', () => {
            const GailAcct = new Account('123456');
            GailAcct.deposit(5000);
            assert.throws(() => {GailAcct.withdraw(0)}, RangeError,'Withdraw amount has to be greater than zero');

        });
        it('withdraw(5001) more than the balance should return an Error', () => {
            const GailAcct = new Account('123456');
            GailAcct.deposit(5000);
           assert.throws(() => {GailAcct.withdraw(50000)}, Error,'Insufficient funds');

        });

    });


//Savings Account Test
    describe('Saving Account', () => {
        it('getInterest() of the Saving Account', () => {
            const GailAcct = new SavingsAccount('123456',2.5);
            assert.strictEqual(GailAcct.getInterest(), 2.5);
        });

        it('setInterest(10) of the SavingsAccount', () => {
            const GailAcct = new SavingsAccount('123456');
            GailAcct.setInterest(2.5)
             assert.strictEqual(GailAcct.getInterest(), 2.5);
        });

        it('addInterest() on the Saving Account and get the New Balance getBalance()', () => {
            const GailAcct = new SavingsAccount('123456');
            GailAcct.deposit(100)
            GailAcct.setInterest(2.5)
            assert.strictEqual(GailAcct.addInterest(), 2.5);
            assert.strictEqual(GailAcct.getBalance(), 102.5);
        });

        it('endOfMonth() of the SavingsAccount', () => {
            const GailAcct = new SavingsAccount('123456');
            GailAcct.deposit(5000)
            GailAcct.setInterest(10)
            assert.strictEqual(GailAcct.endOfMonth(), 'Interest added SavingsAccount 123456: balance 5500 interest: 500');
        });

    });


//Checking Account Test
    describe('Checking Account', () => {
        it('getOverDraft() of the Checking Account', () => {
            const GailAcct = new CheckingAccount('123456',200);
            assert.strictEqual(GailAcct.getOverDraft(), 200);
        });

        it('setOverDraft(100) of the Checking Account', () => {
            const GailAcct = new CheckingAccount('123456');
            GailAcct.setOverDraft(100);
            assert.strictEqual(GailAcct.getOverDraft(), 100);
        });
           it('setOverDraft(-1) of the Checking Account', () => {
            const GailAcct = new CheckingAccount('123456');
            assert.throws(() => {GailAcct.setOverDraft(-1)}, Error,'Overdraft limit should be greater than zero');
        });


        it('withdraw(50) with deposit of 100 and then get the New Balance getBalance()', () => {
            const GailAcct = new CheckingAccount('123456');
            GailAcct.deposit(100)
            GailAcct.withdraw(50);
            assert.strictEqual(GailAcct.getBalance(), 50);
        });

        it('withdraw(500) with deposit of 100 and Overdraft of 500 on the Checking Account and then get the New Balance getBalance()', () => {
            const GailAcct = new CheckingAccount('123456');
            GailAcct.deposit(100)
            GailAcct.setOverDraft(500);
            GailAcct.withdraw(500);
            assert.strictEqual(GailAcct.getBalance(), -400);
        });


        it('withdraw(600) with deposit of 100 and Overdraft of 500 on the Checking Account and then get the New Balance getBalance()', () => {
            const GailAcct = new CheckingAccount('123456');
            GailAcct.deposit(100)
            GailAcct.setOverDraft(500);
            assert.throws(() => {GailAcct.withdraw(600)}, Error,'Withdraw amount exceeded your overdraft-limit');
        });

        it('endOfMonth() of the Checking Account', () => {
            const GailAcct = new CheckingAccount('123456');
            GailAcct.deposit(400)
            GailAcct.setOverDraft(500);
            GailAcct.withdraw(500);
            assert.strictEqual(GailAcct.endOfMonth(), 'Warning, low balance CheckingAccount 123456: balance -100 overdraft-limit 500');
        });


    });


//Bank Test
describe('Bank', () => {
    
        
        it('addAccount() after adding an Account, the bank has one account with index 0', () => {
            const bank = new Bank();
            bank.addAccount();
            assert.strictEqual((new Account(0)).toString(), bank.reportAccount());
        });
        it('addSavingsAccount()', () => {
            const bank = new Bank();
            bank.addSavingsAccount(12);
            assert.strictEqual((new SavingsAccount(1, 12)).toString(), bank.reportAccount().split('\n')[0]);
        });

        it('addCheckingAccount()', () => {
            const bank = new Bank();
            bank.addCheckingAccount(123);
            assert.strictEqual((new CheckingAccount(2, 123)).toString(), bank.reportAccount().split('\n')[0]);
        });

        it('closeAccount()', () => {
            const bank = new Bank();
            bank.addAccount();
            bank.closeAccount(3);
            assert.strictEqual(undefined, bank.reportAccount().split('\n')[3]);
        });
        it('reportAccount', () => {
            const bank = new Bank();
            bank.addAccount();
            bank.addSavingsAccount(12);
            bank.addCheckingAccount(126);
            const compareToStr = [
                (new Account(4)).toString(),
                (new SavingsAccount(5, 125)).toString(),
                (new CheckingAccount(6, 126)).toString()
            ].join('\n');
            assert.strictEqual(compareToStr, bank.reportAccount());
        })
        it('created accounts\' endOfMonth() methods add up into an endOfMonth report', () => {
            const bank = new Bank();
            bank.addAccount();
            bank.addSavingsAccount(1);
            bank.addCheckingAccount(127);
            const compareToStr = [(new Account(5)).endOfMonth(),
                (new SavingsAccount(8, 126)).endOfMonth(),
                (new CheckingAccount(9, 127)).endOfMonth()].join('\n');
            assert.strictEqual(compareToStr, bank.endOfMonth());
        })


});
