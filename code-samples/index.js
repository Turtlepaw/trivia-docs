//Import the package
const EasyTrivia = require("easy-trivia");

//Create a session token
const session = new TriviaSession();

//Get the token
const token = await session.start();

//Fetch 10 questions
const Questions = await EasyTrivia.getQuestions({
    category: 'ART',
    difficulty: 'easy',
    amount: 10,
    token
});

//Console.log the questions
console.log(Questions)