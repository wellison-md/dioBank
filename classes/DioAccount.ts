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
        }else{
            console.log('invalid deposit')
        }
   }

    withdraw = (amount: number):void =>{
        //if(!this.validateStatus()){console.log('invalid account')}
        if(this.balance > 0 && this.balance <= amount){
            this.balance -= amount
        }
    }

    getBalance = ():void =>{
        console.log(`Your balance is RS ${this.balance.toFixed(2)}`)
    }

    private validateStatus = ():boolean =>{
        if(this.status){
            return this.status
        }

        throw new Error('invalid account! please, try again')
    }

}