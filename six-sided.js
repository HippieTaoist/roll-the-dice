// Create a file called `six-sided.js` that uses the `Math.random()` to simulate a random dice roll which is then logged out to the user.

// The challenge here is transforming the random decimal (between 0 and 0.99999999...) into a number that's either 1, 2, 3, 4, 5, or 6. To do this you'll need to do some multiplying and some `Math.floor()`ing (or `Math.ceil()`ing).

const randoSeed = Math.random();

console.log(randoSeed);

const diceRoll = (randoSeed * 6);
console.log(diceRoll);

if (diceRoll < 1) {

    console.log(Math.ceil(diceRoll));
} else if (1 <= diceRoll > 1.5) {

    console.log(Math.floor(diceRoll));
} else if (1.5 <= diceRoll > 2) {

    console.log(Math.ceil(diceRoll));
} else if (2 <= diceRoll < 2.5) {

    console.log(Math.floor(diceRoll));
} else if (2.5 <= diceRoll < 3) {

    console.log(Math.ceil(diceRoll));
} else if (3 <= diceRoll < 3.5) {

    console.log(Math.floor(diceRoll));
} else if (3.5 >= diceRoll < 4) {

    console.log(Math.ceil(diceRoll));
} else if (4 <= diceRoll < 4.5) {

    console.log(Math.floor(diceRoll));
} else if (4.5 <= diceRoll < 5) {

    console.log(Math.ceil(diceRoll));
} else if (5 <= diceRoll < 5.5) {

    console.log(Math.floor(diceRoll));
} else if (5.5 <= diceRoll <= 6) {

    console.log(Math.ceil(diceRoll));
}