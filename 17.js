/* 17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an object with a keys name and balance. Write functions using object methods to update a customer's account balance based on a deposit or withdrawal.
*/
const user = {
    name:"Saurabh",
    balence:1000,
    deposit:function (amount) {
       this.balence += amount;
       console.log(`${amount} is credited in your bank account . Total balence is : ${this.balence}`); 
    },
    withdrawal:function(amount) {
        if (this.balence>=amount) {
            this.balence -= amount;  
            console.log(`${amount} is debited in your bank account.Total balence is : ${this.balence}`);
        }
        else{
            console.log("Unable to withdrawl money because of insufficient money in your bank account");
        }
    
    }
}
user.deposit(1000);//1000 is credited in your bank account . Total balence is : 2000
user.withdrawal(100);//100 is debited in your bank account.Total balence is : 1900
user.withdrawal(2000)//Unable to withdrawl money because of insufficient money in your bank account