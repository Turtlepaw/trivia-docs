# Using Easy Trivia in your project
Now since you have created your `index.js` file you can start coding in it!

## What we are doing?
In this section we will
* Fetch 10 questions and log it to the console
* Use session tokens
* Fetch category information

## Requiring
We will first `require()` the package into our file!

<!-- eslint-skip -->
```js {1,2}
//Import the package
const EasyTrivia = require('easy-trivia');
```

## Fetching Questions
Now since we have imported Easy Trivia we will fetch 10 questions.

<!-- eslint-skip -->
```js {4-13}
//Import the package
const { getQuestions, Category } = require('easy-trivia');

//Fetch 10 questions
const Questions = await getQuestions({
    category: Category.allNames.SCIENCE_COMPUTERS,
    difficulty: 'easy',
    amount: 10,
    type: 'multiple'
});

//Console.log the questions
console.log(Questions)
```

:::tip
`getQuestions#amount` can only be ranging from 1 to 50
:::

## Session Tokens
If you don't want to get the same questions (nobody wants that!) you can use a session token!

<!-- eslint-skip -->
```js {4-8,16,22}
//Import the package
const { getQuestions, Category, Session } = require('easy-trivia');

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