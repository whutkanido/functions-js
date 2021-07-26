
// sayHello() // This only works with function declarations, or function expressions with a var
// This is called "hoisting"

//Function declaration
// this was basically deprecated in 2015
// function sayHello () {
//     console.log('hello')
// }

const sayHello = () => { //this is the non deprecated way to write the same functon above
    console.log('hello')
}

sayHello() // Invoking a function

// Function expression
// anonymous function

const sayHello2 = () => {
    console.log('hello2')
}

sayHello2() // Invocation remains the same

const printBoo = () => {
    console.log('======')
    console.log('Boo!')
    console.log('======')
}

printBoo()



