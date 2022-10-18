import { PeopleAccount } from "./classes/PeopleAccount"




const account1:PeopleAccount = new PeopleAccount(131215,'Will Dias',1312)
account1.deposit(1500)
account1.deposit(250)
account1.getBalance()
account1.withdraw(600) // bug
account1.getBalance()
account1.deposit(-220) // return false
account1.getBalance()