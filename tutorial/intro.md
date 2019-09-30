# General
- this project structure
    - what is README.md
    - what is .gitignore    
    - that is package.json    
- src/ and public/
    - the entry point of your app: index.html <- index.js <- App.js    
- node_modules/

# Node.js & javascript
- `node --version`
- type `node` into REPL (讀取-求值-輸出循環(Read-Eval-Print Loop)，是一個簡單的、交互的編程環境)
    - 舉個其他語言的例子
    - [Chrome 開發者工具的控制台面版 (Console panel)](https://ithelp.ithome.com.tw/articles/10191749)
- basci javascript 
    - primitive data type
        - String
        - Number
        - Boolean
        - Object
        - null
        - undefined
        ```node
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
        - comparison
        - logic (&&,  ||)
    - flow control
        - if ... else
        - switch
        - for
        - while (do while) 
    - function 
        - basic
        - ES6 - arrow function
## references
- https://blog.kdchang.cc/2016/12/21/javascript101-tutorial/
- [ES5 vs. ES6](https://ithelp.ithome.com.tw/articles/10206587)

# React.js
- pure function vs. React component
- must ***return*** A ROOT element
- use ***className*** in React.js instead ***class*** in HTML