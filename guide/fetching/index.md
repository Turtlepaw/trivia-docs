# Fetching Questions & Data
In this section, you will be using a script to get and log questions!

## Basics
First off you should learn the basics of how to fetch questions.

```js
//Import easy trivia
const { getQuestions } = require('easy-trivia');

//Get 10 easy questions
const questions = await getQuestions({
  amount: 10,
  difficulty: 'easy',
  type: 'multiple',
  category: 'SCIENCE_COMPUTERS'
});

//Log the 10 questions
console.log(questions);
```
Running this script will return random easy questions by using the `getQuestions` method used above.

## Session Tokens
If you don't want the same questions you can use a session token to limit questions fetched.

```js
//Imort package
const { Categories, TriviaSession, getQuestions } = require('easy-trivia');

//Create a session
const session = new TriviaSession();
const sessionToken = await session.start();

//Get questions
const batch1 = await getQuestions({
  amount: 10,
  category: Categories.categoryByName('HISTORY'),
  difficulty: 'hard',
  token: sessionToken
});

const batch2 = await getQuestions({
  amount: 10,
  category: Categories.categoryByName('HISTORY'),
  difficulty: 'hard',
  token: sessionToken
});

//Log them
console.log(batch1, batch2);

//End the session
session.end();
```