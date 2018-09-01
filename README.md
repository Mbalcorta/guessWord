## Word guessing games with kittens

## Start
  open zip file on desktop
  in terminal go to desktop
  cd guessWord
  npm install
  npm run start

## User instructions
  Enter single letter into input field to guess kittens secret word and press 'Guess' to submit your guess. Guess the secret word and make this grumpy kitten happy. 
  
## creative extensions
  once user has submitted correct word, user has choice to either keep practicing at the same level or move up to the next level. 

  Wanted to implement that as the user makes correct guesses a basket full of yarn gets closer and closer to the kitten till the word is guessed. 

## Thought process
  First step was getting API working and returning values I needed on the front end. Ended up building a deployed server side app to get data needed. Built using node.js and express.js. 

  Then I  layed out what states I needed to keep track of and build out from there. 
  Established I needed to keep track of winner, guesses remaining, secret word, guessed letter, difficulty level, word index, found letters, wrong guesses and if the application is in a loading state. 

  Then built function that when application is initially loaded it makes an ajax call to the API and stores the secret word. Then built a component that accepts the secret word that is then turned into an array. The array then loops over another component that outputs a single empty spot. 
  
  I knew I needed a way where all instances of the letters needed to pop up when found. I knew I needed an object to store the found letters. Ended up building a letter matches function that on each guess adds to this object if the letter is found, both the letter and the index are stored. As each empty slot is currently rendered by the secret word array I knew I could then do a look up on the found letters object by checking to see if the index position contains a character. If character exists it reveal the letters in the single empty spots.

  Once user wins they have the option of staying at the same level and practicing. Here an API call is made to get a new word and a new word is returned by increasing my word index variable. If user wants to level up they can do so and the difficulty level is increased and another API call is made for a new word. 