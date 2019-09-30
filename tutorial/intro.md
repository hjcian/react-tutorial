# Table of contents
- [Table of contents](#table-of-contents)
- [基礎介紹](#----)
  * [Intro to preject files](#intro-to-preject-files)
  * [Javascript](#javascript)
  * [Node.js](#nodejs)
  * [React.js](#reactjs)
  * [References](#references)

# 基礎介紹
## Intro to preject files
- this project structure
    - what is README.md
    - what is .gitignore    
    - that is package.json    
- src/ and public/
    - the entry point of your app: index.html <- index.js <- App.js    
- node_modules/

## Javascript
- how to write and run a javascript script?
    - using `node`
        - `node --version`
        - type `node` into REPL (讀取-求值-輸出循環(Read-Eval-Print Loop)，是一個簡單的、交互的編程環境)
        - 舉個其他語言的例子
    - edit `yourScript.js` then run `node yourScript.js`
    - [Chrome 開發者工具的控制台面版 (Console panel)](https://ithelp.ithome.com.tw/articles/10191749)    
- basic javascript skills - before learning Node.js
    - primitive data type
        - **String**, **Number**, **Boolean**, **Object**, *null*, *undefined*
            ```js
            let num = 123
            let str = "max"
            let bool = 1 == 2
            let obj = { name: "max", age: 29 }
            let undef
            let nothing = null
            typeof(num) // 'number'
            typeof(str) // 'string'
            typeof(bool) // 'boolean'
            typeof(obj) // 'object'
            typeof(undef) // 'undefined'
            typeof(nothing) // 'object'
            ```    
    - operator / arithmetic
        - assignment 
            - `let a = 123`, `const b = "hello world"`
        - +-*/
        - comparison ( use === and !== )
        - logic (&&,  ||)
    - flow control
        - if ... else
        - switch
        - for
        - while (do while) 
    - function (refer to *Q: What is functions JavaScript?*)
        - basic
            - Anonymous Function
            - Regular Named Function
        - ES6 - arrow function
    - array        
        - ```js
            const array = ['Hello', 'World', '!!!']
            console.log(array[1]) // World
            console.log(array.length)// 3
            array.forEach((item, index, array) => {
            console.log(`item: ${item}, idx: ${index}, array: ${array}`)
            // item: Hello, idx: 0, array: Hello,World,!!!
            // item: World, idx: 1, array: Hello,World,!!!
            // item: !!!, idx: 2, array: Hello,World,!!!
            })
            console.log(array.indexOf('!!!')) // 2
            console.log(array.indexOf('python')) // -1
          ```
        - [more](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - Q: What is the difference between `let` and `var`?
        - let : block scope variable
        - var : global scope variable
        - [more](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/let)
        - ***practical suggestion***: use `let` for mutable use case and `const` for immutable use case
    - Q: What is **Hoisting** in JavaScript?    
        - **Hoisting** is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
            ```js
            x = 5 
            console.log(x) // Output: 5
            var x
            ```
    - Q: What the output of the following javascript programs?
        - 有趣的例子，結合上述兩個問題的認知，想一下輸出會是什麼
            ```js
            for (var i = 0; i < 5; ++i) {
                setTimeout(() => {
                    console.log(i)
                }, 1000)
            }
            ``` 
            vs. 
            ```js
            for (let i = 0; i < 5; ++i) {
                setTimeout(() => {
                    console.log(i)
                }, 1000)
            }
            ```
    - Q: What is Callback Functions? and Q: Why do we need Callbacks?

## Node.js
- npm
- callbacks

## React.js
- pure function vs. React component
- must ***return*** A ROOT element
- use ***className*** in React.js instead ***class*** in HTML

## References
- [javascript101-tutorial](https://blog.kdchang.cc/2016/12/21/javascript101-tutorial/)
- [ES5 vs. ES6](https://ithelp.ithome.com.tw/articles/10206587)
- [JavaScript Interview Questions](https://www.fullstacktutorials.com/interviews/advanced-javascript-interview-questions-and-answers-for-experienced-12.html)
- [ES6 Interview Questions](https://www.fullstacktutorials.com/interviews/javascript-es6-interview-questions-11.html)
