/*  Properly naming a function:
The variable you use for a function should contain a verb
If the purpose of your function is to check data, use the verb check in the variable name
ex.  checkInputLength
*/



const areAllOdd = (arr) => {
    if(arr.length <=0){
      console.log('Thats an empty list')
      return
    }
    if(arr[0] % 2 === 0){
        console.log('not odd')
        arr.shift()
        return areAllOdd(arr)
    } else {
        console.log('contains an odd number')
    }
}

areAllOdd([2, 4, 6, 8])

