const printSum = () => {
    console.log(10 + 10)
}

printSum()

const printTriangle = (numRows) => {
  let f = '#'  
  for(let i = 0; i < numRows; i++){
      console.log(f)
      f += '#'
  }
}

printTriangle(7)

/* params & args
var identifier = value
paramater = argument
identifier::paramater,  value::argument
*/

const add = (num1, num2) => {
    return num1 + num2
}

console.log(add(1,5))
