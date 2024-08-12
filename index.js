// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in

let randomword = "Prince"

// Create a new variable called attempts and set it to 0

let attempts = 0

// Prompt the user to guess a letter

let guess = prompt("Guess a letter")


// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word

guess = guess.toLowerCase()

if (guess.includes("p") || guess.includes("r") || guess.includes("i") || guess.includes("n") || guess.includes("c") || guess.includes("e")) {
  console.log("The letter you guess is in the word")
}

// Prompt the user to guess the word 

let guessword = prompt("try to guess the word")


// Increase attempts by 1

attempts = attempts + 1


// Write an if/else statement that checks if the user guess is equal to your word and tells the user

if (guessword === randomword) {
  console.log("you got it")
}
else {
  console.log("you don't got it")
}

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word

while (guessword != randomword) {

  let guess = prompt("Guess a letter")

  guess = guess.toLowerCase()

  if (guess.includes("p") || guess.includes("r") || guess.includes("i") || guess.includes("n") || guess.includes("c") || guess.includes("e")) {
    console.log("The letter you guess is in the word")
  }

  guessword = prompt("try to guess the word")

  attempts = attempts + 1

  if (guessword === randomword) {
    console.log("you got it")
  }
  else {
    console.log("you don't got it")
  }
}

console.log(`it took ${attempts} attempts`)
// In the while loop, copy the prompt and if/else check for a letter


// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

