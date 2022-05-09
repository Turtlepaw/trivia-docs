//Import the package
import { getQuestions, Category, Session } from "easy-trivia";

//Create a session
const session = new Session();

//Start the session
await session.start();

//Fetch 10 questions
const Questions = await getQuestions({
    category: Category.allNames.SCIENCE_COMPUTERS,
    amount: 10,
    session
});

//Console.log the questions
console.log(Questions)

session.end();