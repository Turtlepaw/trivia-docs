# Categories

## Categories
There are 27 categories to choose from here's a list of all of them:

1. `GENERAL_KNOWLEDGE`
2. `ENTERTAINMENT_BOOKS`
3. `ENTERTAINMENT_FILM`
4. `ENTERTAINMENT_MUSIC`
5. `ENTERTAINMENT_MUSICALS_AND_THEATRES`
6. `ENTERTAINMENT_TELEVISION`
7. `ENTERTAINMENT_VIDEO_GAMES`
8. `ENTERTAINMENT_BOARD_GAMES`
9. `SCIENCE_AND_NATURE`
10. `SCIENCE_COMPUTERS`
11. `SCIENCE_MATHEMATICS`
12. `MYTHOLOGY`
13. `SPORTS`
14. `GEOGRAPHY`
15. `HISTORY`
16. `POLITICS`
17. `ART`
18. `CELEBRITIES`
19. `ANIMALS`
20. `VEHICLES`
21. `ENTERTAINMENT_COMICS`
22. `SCIENCE_GADGETS`
23. `ENTERTAINMENT_JAPANESE_ANIME_AND_MANGA`
24. `ENTERTAINMENT_CARTOON_AND_ANIMATIONS`

## Category data
If you want to fetch data about a specific category you can use the `getCategoryData()` method.

```js
//Import the package
const { Categories } = require('easy-trivia');

//Get the category data
const categoryData = await Categories.getCategoryData('GENERAL_KNOWLEDGE');

//Log the category data
console.log(categoryData);
```

## Random Categories
If you want to get a random category you can use the `Categories.random()` function.

```js
//Import the package
const { Categories } = require('easy-trivia');

//Get the random category
const Category = Categories.random();

//Log the category
console.log(Category);
```

## All category names
You can get an array of all categories by using the `Categories.allNames`.

```js
//Import the package
const { Categories } = require('easy-trivia');

//Log all the names
console.log(Categories.allNames);
```
## Get a Category
You can get a category by name or Id

```js
//Import the package
const { Categories } = require('easy-trivia');

//By name
Categories.getCategoryByName("GENERAL_KNOWLEDGE");

//By Id
Categories.getCategoryById(9);
```