
import inquirer from "inquirer";

const currancy: any = {
  USD: 1, // Base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280
};

let user_answer = await inquirer.prompt(

     [
        {  
             name: 'from',
             message: "Enter From Currancy",
             type: 'list',
             choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
             name: 'to',
             message: "Enter From Currancy",
             type: 'list',
             choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
  
              name: 'amount',
              message: "Enter Your Amount" ,
              type:  'number'
        }
      ]

    )


  
    let fromAmount = currancy[user_answer.from] // exchange rate
    let toAmount  =   currancy[user_answer.to] //exchange  rate 
    let amount = user_answer.amount 
    let baseAmount = amount / fromAmount //USD base currency //
    let convertedAmount = baseAmount * toAmount 
    console.log (convertedAmount );

     


