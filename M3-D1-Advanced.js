/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const maxChar = (str) => {
    let res = new Map()
    let most = ["", 0]

    for (let i = 0; i < str.length; i++) {
        if (!res.has(str.charAt(i))) {
            res.set(str.charAt(i), 1)
        } else {
            res.set(str.charAt(i), res.get(str.charAt(i)) + 1)
        }
    }
    for (let [key, value] of res) {
        if (value > most[1]) {
            most = [key, value]
        }
    }
    return most[0]
}


/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const mapFromCharacters = (str) => {
    let res = new Map()
    let most = ["", 0]

    for (let i = 0; i < str.length; i++) {
        if (/^[a-zA-Z]*$/g.test(str.charAt(i)) && !res.has(str.charAt(i))) {
            res.set(str.charAt(i).toLowerCase(), 1)
        } else if (/^[a-zA-Z]*$/g.test(str.charAt(i))) {
            res.set(str.charAt(i).toLowerCase(), res.get(str.charAt(i)) + 1)
        }
    }
    return res
}

const anagrams = (str1, str2) => {
    let map1 = mapFromCharacters(str1)
    let map2 = mapFromCharacters(str2)

    if (map1.size !== map2.size) {
        return false
    }
    for (let [key, value] of map1) {
        if (map2.has(key) && map2.get(key) !== value) {
            return false
        }
    }
    return true
}



/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" 
    the program should return a list containing "inlets".
*/

const checkCandidates = (word, candidates) => {
    let res = []
    for (let i = 0; i < candidates.length; i++) {
        if (anagrams(word, candidates[i])) {
            res.push(candidates[i])
        }
    }
    return res
}

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const palindrome = (str) => str.split("").reverse().join("") === str ? true : false

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = (n) => {
    if (n.toString().startsWith("-")) {
        return `-${n.toString().slice(1).split("").reverse().join("")}`
    } else {
        return n.toString().split("").reverse().join("")
    }
}

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */


const steps = (N) => {
    for (let i = 1; i <= N; i++) {
        console.log(`'${"#".repeat(i)}${" ".repeat(N-i)}'\n`)
    }
}


/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverse = (str) => str.split("").reverse().join("")


/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

const chunk = (arr, size) => {
    let res = []
    let iterations
    if (size > arr.length) {
        iterations = 1
    } else {
        if (arr.length % 2 === 0) {
            iterations = arr.length / 2 - 1
        } else if (arr.length % 2 !== 0) {
            iterations = arr.length / 2
        }
    }

    for (let i = 0; i < parseInt(iterations); i++) {
        if (i * size + size > arr.length) {
            res.push(arr.slice(i * size))
        } else {
            res.push(arr.slice(i * size, i * size + size))
        }
    }
    console.log(res)
}

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const pyramid = (N) => {
    for (let i = 0; i < N; i++) {
        console.log(`'${" ".repeat(N-i-1)}${"#".repeat(i*2+1)}${" ".repeat(N-i-1)}'\n`)
    }
}


/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/

const matrix = (N) => {
    let colstart = 0
    let colend = N
    let rowend = N
    let rowstart = 0
    let col = 0
    let row = 0
    let index = 1
    res = []
    for (let i = 0; i < N; i++) {
        res[i] = Array(N).fill(1)
    }
    for (let i = 0; i <= 1; i++) {
        //horizontal from left to right
        while (col < colend) {
            res[row][col] = index
            col++
            index++
        }
        col--
        index--
        //vertical from top to bottom
        while (row < rowend) {
            res[row][col] = index
            row++
            index++
        }
        row--
        col--
        //horizontal from right to left
        while (colstart <= col) {
            res[row][col] = index
            index++
            col--
        }
        col++
        row--
        //vertical from bottom to top
        while (rowstart < row) {
            res[row][col] = index
            row--
            index++
        }
        row++
        col++
        colend--
        colstart++
        rowstart++
        rowend--
    }
    console.log(res);
}

matrix(4)