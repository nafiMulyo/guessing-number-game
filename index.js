const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const displayMessage = (number) => {
    console.log(`\nWassup! Welcome to the Number Guessing Game!\n\nChoose the difficulty level you want:`);
    console.log(`    1. EZ (10 chances)\n    2. Kinda (5 chances)\n    3. Okay... (3 chances)\n    4. Bruh I am dead (1 chances)\n`)
    console.log(`Aight. Now I'm thinking of a number between 1 and 100.`);
}

const startGame = () => {
    rl.question("Enter your choice : ", choice => {
        const level = parseInt(choice);

        if (level != 1 &&
            level != 2 &&
            level != 3 &&
            level != 4) {
            console.log("\nBro! choose the correct level! (1 / 2 / 3 / 4)");
            startGame();
        }
        else {
            let chances;
            if (level === 1) chances = 10;
            if (level === 2) chances = 5;
            if (level === 3) chances = 3;
            if (level === 4) chances = 1;

            console.log(`\nAight! Let's give it a try!\nYou have ${chances} chances to guess the correct number. Go on!\n`);

            guessNumber(chances, 1);
        }
    })
}

const guessNumber = (chances, attempts) => {
    rl.question("Enter your guess : ", (choice) => {
        console.log();
        const num = parseInt(choice);
        if (chances === 1) {
            console.log(`Game is over! Actually, the answer is ${randomNumber} :P`)
            process.exit(1);
        }

        if (num === randomNumber) {
            console.log(`You nailed it! You guessed the correct number in ${attempts} attempts!`);
            process.exit(1);
        }
        else if (num < randomNumber) {
            console.log(`Nope. The number is greater than ${num}.`);
            guessNumber(chances - 1, attempts + 1);
        }
        else {
            console.log(`Nah bro! The number is less than ${num}.`);
            guessNumber(chances - 1, attempts + 1);
        }
    })
}

const randomNumber = Math.floor(Math.random() * 100) + 1;

displayMessage(); startGame();