import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }
    getLoan = ():void =>{
        console.log('vc pegou um empréstimo')
    }

    //sobreescrita do metodo vindo da DioAccount
    deposit = ():void =>{
        console.log('A empresa depositou')
    }
}