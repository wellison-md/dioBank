export abstract class DioAccount{
    private name: string 
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void =>{
        this.name = name
        console.log('name changed with success')
    }

    getName = ():string =>{
        return this.name
    }

    deposit = (amount: number):void =>{
        if(this.validateStatus() && amount > 0){
            this.balance += amount
            console.log(`amount of RS ${amount.toFixed(2)} deposited with success`)
        }
   }

    withdraw = (amount: number):void =>{
        if(this.validateStatus()){
            if(this.getBalance() > 0 && this.getBalance() >= amount){
                this.balance -= amount
                console.log(`RS ${amount.toFixed(2)} was withdrew from your account`)
            }else{
                console.log("Your balance isn't enough")
            }
        }
        
    }

    getBalance = ():number =>{
        console.log(`Your balance is RS ${this.balance.toFixed(2)}`)
        return this.balance
        //console.log(`Your balance is RS ${this.balance.toFixed(2)}`)
    }

    private validateStatus = ():boolean =>{
        if(this.status){
            return this.status
        }

        throw new Error('invalid account! please, try again')
    }

}