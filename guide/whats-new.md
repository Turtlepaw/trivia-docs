# What's new
Easy Trivia is now [TypeScript](https://typescriptlang.org).

## Categories
`Categories()` is now `Category()` which will be able to hold data about an individual category rather than being a class containing category-related utility functions. This new class will still hold static members resembling the 1.0.0 functions and will even expand on them.

```diff
- await Categories.getCategoryData(arg);

+ await new Category('GENERAL_KNOWLEDGE').getData();
```

## Constants
Constants are now to Enums.

## Sessions

`TriviaSession` has been renamed to `Session`.

## Docs

The docs have been moved to the [Github Wiki](https://github.com/Elitezen/easy-trivia/wiki/)