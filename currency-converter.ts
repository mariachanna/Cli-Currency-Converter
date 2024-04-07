#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.bgGreen("***CURRENCY CONVERTER***"));


const currency:any = {
    USD: 1, //BASE CURRENCY
    PKR: 227.54,
    IND: 83.30,
    EUR: 0.92,
    NZD: 1.66,
    NPR: 133.08,
    MAD: 10.06,
    EGP: 47.33,
    IRR: 42075.00,
    AFN: 71.23,
    IQD: 1308.17,

}
let userSelection = await inquirer.prompt(
    [
        {
         name:"From",
         message:"SELECT YOUR CURRENCY WHICH YOU WANT TO CONVEERT" ,
         type:"list" ,
         choices: ["USD", "PKR", "IND", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD"],
    
        },
        {
            name:"To",
            message:"SELECT YOUR CURRENCY IN WHICH YOU WANT TO CONVERT",
            type:"list",
            choices:["USD", "PKR", "IND", "EUR", "NZD", "NPR", "MAD", "EGP", "IRR", "AFN", "IQD"],
    
        
        },
        {
            name:"Amount",
            message:"HOW MUCH AMOUNT YOU WANT TO CONVERT",
            type:"number",
        }
    ]
);


let fromlist = currency[userSelection.From];
let toList = currency[userSelection.To];
let amount = userSelection.Amount;
let BaseAmount = amount / fromlist;
let converterAmount = BaseAmount * toList;
let result = Math.round(converterAmount);

console.log(chalk.bgMagenta(result));
