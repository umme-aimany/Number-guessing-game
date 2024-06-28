#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1); //////+1 isliya kiya ha taka 0 na ai ///////////or 10 means ya 1 sa 10 tak ka number generate karai ga
const game = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "Please guess a number between 1-10",
    }
]);
console.log(game);
if (game.userGuessnumber === randomNumber) {
    console.log("Congratulations!you guess right number");
}
else {
    console.log("OOPS!you guess wrong number");
}
