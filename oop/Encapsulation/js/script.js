//Encapsulation and abstraction 

let holder = document.getElementById("account");
let holderDeposited = document.getElementById("accountDeposited");
let holderWithdrew = document.getElementById("accountWithdrew");
let holderCurrent = document.getElementById("accountCurrent");

class BankAccount {

     #balance;

    constructor(amount){
        this.#balance = amount;

        holder.innerHTML = (`you Account blance ${this.#balance}`);
    }

    depositedAmount(amount) {
        if (amount >= 0 && amount != 0) {
            this.#balance += amount;
            this.#displayBlance();
            holderDeposited.innerHTML = (`Deposited sucessfull : ${amount}`);
        } else {
            holderDeposited.innerHTML = (`please curect amount Deposited`);
        }
    }

    withdrewAmount(amount) {
        if (amount <= this.#balance &&  amount > 0) {   
            this.#balance -= amount;
            this.#displayBlance();
            holderWithdrew.innerHTML = (`Withdrew is sucessfll : ${amount}`);
        } else {
            holderWithdrew.innerHTML = (`Enter the valid withdrew amount.....!`);
        }
    }

    #displayBlance() {
        holderCurrent.innerHTML = (`you are current blance is : ${this.#balance}`);
    }}

let user = new BankAccount(1000);
user.depositedAmount(1000);
user.withdrewAmount(500);