# Using Sessions
Keep getting the same questions in your code? This section will solve that with sessions.

## Session Tokens
If you don't want to get the same questions (nobody wants that!) you can use a session token!

<!-- eslint-skip -->
```js {4-8,16,22}
//Import the package
import { getQuestions, Category, Session } from "easy-trivia";

//Create a session
const session = new Session();

//Start the session
await session.start();

//Fetch 10 questions
const Questions = await getQuestions({
    category: Category.allNames.SCIENCE_COMPUTERS,
    difficulty: 'easy',
    amount: 10,
    type: 'multiple',
    session
});

//Console.log the questions
console.log(Questions)

session.end();
```

## Code
<ResultingCode path="index.js" />
