const getLastElement = (arr) => {
    console.log(arr[arr.length - 1])
}

getLastElement([1,2,3,4,5,6])

const testArray = ['Big', 'Small', 'C']

getLastElement(testArray)


// Understanding return

const calculateArea = (length, width) => {
    return length * width
}

const area = calculateArea(8,9)

console.log('area is:',area)


