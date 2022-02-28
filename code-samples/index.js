const EasyTrivia = require("easy-trivia");

const session = new TriviaSession();

const token = await session.start();

const Questions = await EasyTrivia.getQuestions({
    category: 'ART',
    difficulty: 'easy',
    amount: 10,
    token
});

console.log(Questions)