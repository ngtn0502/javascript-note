# Javascript: What the f-ck is Javascript

## Things worthy to review:

| No. | Questions                               |
| --- | --------------------------------------- |
|     |                                         |
| 1   | [Execution Context](#execution-context) |
| 3   | [Execution Context](#execution-context) |
| 4   | [Execution Context](#execution-context) |
| 5   | [Execution Context](#execution-context) |
| 6   | [Execution Context](#execution-context) |
| 7   | [Execution Context](#execution-context) |

## Syntax Parser

JS runtime will compiles you code word by word in every time you run JS code to machine languages that computer can understand
We write the abstract code that allow human readable => under the hood that somebody very smart do something to compile the code to machine language

![compiler will add more stuff to our code under the hood](./image/compiler.png)

## Lexical Environment:

it mean talking about where our code is written - where our code is phisically sit and what surrounds it.

## Execution Context:

Execution context is a wrapper of all your lexical environment - all your code in other words.
there are lot of lexical environment. Which one is currently running is managed via execution context

- When JS file is runing Global execution context will create two thing: (actually JS engine do it)
  1. Global object
  1. "this" keywords

## Execution context: Creation and Hoisting

1.  **Creation Phrase:** - Hoisting
    - Before your code execute line by line =>
    - The JS engine will scan the code and Setup memory space for variables and function - to prepare for execution phrase
    - All the variable and function will be setup a placeholder. Entire function will be place in memory.
    - But variable only setup placeholder(memory space) and its value set to **undefined** - not the value - the value will be set in the execution phrase if it have.
    1. **UNDEFINED**
       - is a special value in JS
       - it mean that the value have take up place in memory but never assign to a value - it is that compiler add more when it run my code in [Syntax Parser](#syntax-parser)
2.  **Execution Phrase**
    ![Execution context](./image/executionContext.PNG)
    ![Execution context](./image/executionContext2.PNG)

    - Every function when it involve it will **create it own execution context** and JS engine will put this execution context to the Execution Stack (Stack follow "First in last out")
    - The order lexically doesn't matter - it mean the order that you write your code does not matter - the order in the **Stack** is matter
    - In this image bellow: although function a is above function b => it normal because in the creation phrase function already take place in memory during global execution context
    - a()=>b()=>var
      ![Execution context](./image/executionContext3.PNG)
