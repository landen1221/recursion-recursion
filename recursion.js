/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1
  return nums[0] * product(nums.slice(1))
}

// console.log(product([2, 3, 4]))

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestWord=0) {
  if (idx === words.length) return longestWord;
  if (words[idx].length > longestWord) {
    longestWord = words[idx].length
  }
  return longest(words, idx+1, longestWord)
}

// console.log(longest(["hello", "hi", "hola", "habanero"]))  // 5

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0) {
  if (idx >= str.length) return ""
  return str[idx] + everyOther(str, idx+2)

}
// console.log(everyOther("hello"))  // "hlo"

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str, idx=str.length-1, backwards="") {
  if (idx < 0 ) return backwards=== str
  backwards += str[idx]
  return  isPalindrome(str, idx-1, backwards)
}

// console.log(isPalindrome("gag"))  // true
// console.log(isPalindrome("tacodog"))  // false

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (arr[idx] === val) return idx
  if (idx === arr.length) return -1
  return findIndex(arr, val, idx+1)
}
// let animals = ["duck", "cat", "pony"];

// console.log(findIndex(animals, "cat"));  // 1
// console.log(findIndex(animals, "porcupine"));   // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=str.length-1, backwards="") {
  if (idx < 0 ) return backwards
  backwards += str[idx]
  return  revString(str, idx-1, backwards)
}
// console.log(revString("porcupine")) // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}


// let nestedObj = {
//   firstName: "Lester",
//   favoriteNumber: 22,
//   moreData: {
//     lastName: "Testowitz"
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100,
//       deeplyNestedString: {
//         almostThere: {
//           success: "you made it!"
//         }
//       }
//     },
//     favoriteString: "nice!"
//   }
// };

// console.log(gatherStrings(nestedObj)) // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  return arr.indexOf(val)
}

console.log(binarySearch([1,2,3,4],1)) // 0
console.log(binarySearch([1,2,3,4],3)) // 2
console.log(binarySearch([1,2,3,4],5)) // -1

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
