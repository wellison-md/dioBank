import { DioAccount } from "./DioAccount";

export class Admin extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }
}
