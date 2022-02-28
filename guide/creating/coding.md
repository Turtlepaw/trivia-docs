# Coding
Now since you have created your `index.js` file you can start coding in it!

## What we are doing?
In this section we will:
1. Fetch 10 questions
2. Log it into the console
3. Then use session tokens
4. Fetch category information

## Requiring
We will first `require()` the package into our file!

<!-- eslint-skip -->
```js {1,2}
//Import the package
const EasyTrivia = require('easy-trivia');
```

## Fetching Questions
Now since we have imported easy trivia we will fetch 10 questions.

<!-- eslint-skip -->
```js {4-13}
//Import the package
const EasyTrivia = require('easy-trivia');

//Fetch 10 questions
const Questions = await EasyTrivia.getQuestions({
    category: 'ART',
    difficulty: 'easy',
    amount: 10
});

//Console.log the questions
console.log(Questions)
```

## Adding a session token
If you don't want to get the same questions (noboby wants that!) you can use a session token!

<!-- eslint-skip -->
```js {4-8,15}
//Import the package
const EasyTrivia = require('easy-trivia');

//Create a session token
const session = new EasyTrivia.TriviaSession();

//Get the token
const token = await session.start();

//Fetch 10 questions
const Questions = await EasyTrivia.getQuestions({
    category: 'ART',
    difficulty: 'easy',
    amount: 10,
    token,
});

//Console.log the questions
console.log(Questions)
```

## Code
<ResultingCode path="index.js" />