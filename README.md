# Javascript: Understand the weird part

## Syntax Parser

JS runtime will compiles you code word by word in every time you run JS code to machine languages that computer can understand
We write the abstract code that allow human readable => under the hood that somebody very smart do something to compile the code to machine language

![compiler will add more stuff to our code under the hood](./image/compiler.png)

## Lexical Environment:

it mean talking about where our code is written - where our code is phisically sit and what surrounds it.

## Execution Context:

there are lot of lexical environment. Which one is currently running is managed via execution context

- When JS file is runing Global execution context will create two thing:
  1. Global object
  1. "this" keywords
