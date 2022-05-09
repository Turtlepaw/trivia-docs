//Import the package
import { getQuestions, Category } from "easy-trivia";

//Fetch 10 questions
const Questions = await getQuestions({
    category: Category.allNames.SCIENCE_COMPUTERS,
    amount: 10,
    type: 'multiple',
    difficulty: 'easy'
});

//Console.log the questions
console.log(Questions)