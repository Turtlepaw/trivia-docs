# Fetching Questions
Now since you have created your project you can start creating your project's code.

<!-- eslint-skip -->
```js
//Import the package
import { getQuestions, Category } from "easy-trivia";

//Fetch 10 questions
const Questions = await getQuestions({
    category: Category.allNames.SCIENCE_COMPUTERS,
    amount: 10
});

//Console.log the questions
console.log(Questions)
```

## Question types and difficulties
You can change the type and difficulty of the questions you fetch.

<!-- eslint-skip -->
```js {8-9}
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
```

:::tip
`getQuestions#amount` can only be ranging from 1 to 50
:::

## Code
<ResultingCode path="index.js" />
