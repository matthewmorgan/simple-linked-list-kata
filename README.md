# Simple Linked List Kata


Write a simple linked list implementation that uses Elements and a List.

The linked list is a fundamental data structure in computer science, often used in the implementation of other data structures. They're pervasive in functional programming languages, such as Clojure, Erlang, or Haskell, but far less common in imperative languages such as Ruby or Python.

The simplest kind of linked list is a singly linked list. Each element in the list contains data and a "next" field pointing to the next element in the list of elements.

This variant of linked lists is often used to represent sequences or push-down stacks (also called a LIFO stack; Last In, First Out).

As a first take, lets create a singly linked list to contain the range (1..10), and provide functions to reverse a linked list and convert to and from arrays.

## Requirements

You should use [NodeJS v8](https://nodejs.org/en/download/) or above.

Install assignment dependencies:

```bash
npm install
```

## Linting your code

Check your code for style issues:

```bash
npm run lint
```

## Making the test suite pass

Run Jest in watch mode, with coverage info like this:

```bash
npm run watch:cover
```

In the test suite all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.
