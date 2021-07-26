/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (x,y) => {
  return  x >= y ? x : y;
};

console.log(maxOfTwoNumbers(2,5))
/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (x,y,z) => {
  if (x > y && x > z) {
      return x
  } else if (y > x && y > z) {
      return y
  } else {
      return z;
  }
};

console.log(maxOfThree(7,3,19))

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
        return true
    } else {return false}
  };

console.log(isCharacterAVowel('e'))

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  let sum = 0 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
  return sum
  };

console.log(sumArray([1,2,3,5]))

multiplyArray = (arr) => {
  let product = 1
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  return product 
}

console.log(multiplyArray([5,2,10,5,2]))

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

sumArg = (arr) => {
  return arr.length
}

console.log(sumArg([1,4,7,6,4,2,45]))

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  let revArr = [];
  for (let i = 0; i < str.length; i++) {
      revArr.push(str[i]);
  }
  let reverseStr = '';
  while (revArr.length > 0) {
      reverseStr += revArr.pop();
  }
  return reverseStr;
}
console.log(reverseString('Play Led Zepplin Backwards'))

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  let longestWord = "";

  arr.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord.length;
}

console.log(findLongestWord(['one', 'two', 'big long string', 'four', 'seventy']))

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr, int) => {
  let length = arr.length;
  let longestWords = [];
  for (i = 0; i < length; i++) {
    if (arr[i].length > int) {
      longestWords[longestWords.length] = arr[i];
    }
  }
  return longestWords;
}

console.log(filterLongWords(['yes','no','hello','goodbye','whats up','no way'],5))