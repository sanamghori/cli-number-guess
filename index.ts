#! /usr/bin/env node
import inquirer from "inquirer";

//1) computer will generate arandom number

//2) user input for guessing number
//3) computer user input with computer generate number and show result

const randamNumber =Math.floor(Math.random()*6+1);

const answers = await inquirer.prompt
([
    {
        name:"user guessed number",
        type:"number",
        message:"please guess a number between 1-6:",
},
])
console.log(answers);
if (answers.userguessnumber === randamNumber){
    console.log("congratulations! you guess right number,");
}else{
    console.log("you guess wrong number");
}
const randomNumber= Math.floor(Math.random () *6-1);
console.log(randomNumber)