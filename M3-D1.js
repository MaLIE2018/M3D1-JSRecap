/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumOfTwoInteger = (n1, n2) => (n1 === n2) ? (n1 + n2) * 3 : n1 + n2

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkTwoNumbers = (n1, n2) => ((n1 === 50 || n2 === 50) || (n1 + n2 === 50)) ? true : false

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeCharAtIndex = (str, index) => str.split("").filter(letter => str.split("").indexOf(letter) !== index).join("")


/*

4)
 Create a function to find the largest of three given integers.
*/

const largestNumberinThree = (n1, n2, n3) => Math.max(n1, n2, n3)

const alternative = (n1, n2, n3) => {
        if (n1 < n2) {
            if (n2 < n3) {
                return n3
            } else {
                return n2
            }
        } else if (n1 > n3) {
            return n1
        } else {
            return n3
        }
    }
    /*
    5)
    Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
    */

const checkTwoNumbersRanges = (n1, n2) =>
    ((n1 >= 40 && n1 <= 60 || n1 >= 70 && n1 <= 100) && (n2 >= 40 && n2 <= 60 || n2 >= 70 && n2 <= 100)) ? true : false


/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const createCopies = (str, c) => {
        for (let i = 1; i <= c; i++) {
            console.log(str)
        }
    }
    /*

    7)
    Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
    */

const printCityName = (str) =>
    (str.startsWith("Los") || str.startsWith("New")) ? console.log(str) : console.log("blank")

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumOfElements = (arr) => arr.reduce((accumulator, element) => accumulator + element)


/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const testArray = (arr) => (arr.includes(1) || arr.includes(3)) ? true : false

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

const testArrayNot = (arr) => (arr.indexOf(1) === -1 && arr.indexOf(3) === -1) ? true : false

console.log(testArrayNot([4, 28]));
/*
    11)

    Create a function to find the longest string from a given array of strings.
*/

const findLongestStr = (arr) => {
    let longest = 0
    for (const item of arr) {
        if (item.length > longest) longest = item.length
    }
    return longest
}

/*
    12)

    Create a function to find the types of a given angle.

    Types of angles:
        Acute angle: An angle between 0 and 90 degrees.
        Right angle: An 90 degree angle.
        btuse angle: An angle between 90 and 180 degrees.
        Straight angle: A 180 degree angle.
*/
const typeOfAngle = (angle) => {
    switch (true) {
        case (angle >= 0 && angle <= 90):
            return "Acute angle"
            break
        case (angle === 90):
            return "Right angle"
            break
        case (angle > 90 && angle < 180):
            return "btuse angle"
            break
        case (angle = 180):
            return "Straight angle"
            break
        default:
            return "Unknown angle"
            break
    }
}

/*
   13)

   Create a function to find the index of the greatest element of a given array of integers
*/

const greatestElementInArray = (arr) => {
    let greatest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greatest) {
            greatest = arr[i]
        }

    }
    return greatest
}


/*


   14)

   Create a function to get the largest even number from an array of integers.
*/
const greatestEvenElementInArray = (arr) => {
    let greatest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > greatest) && arr[i] % 2 === 0) {
            greatest = arr[i]
        }

    }
    return greatest
}

/*
   15)

   Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const checkIfOpposite = (n1, n2) => ((n1 > 0 && n2 < 0) || (n2 > 0 && n1 < 0)) ? true : false

/*
   16)

   Create a function to create new string with first 3 characters are in lower case and the others in upper case. 
   If the string length is less than 3 convert all the characters in upper case. 
*/

const toUpperFirst3Letters = (str) => {
    if (str.length < 3) {
        return str.toUpperCase()
    } else {
        return str.slice(0, 3).toUpperCase() + str.slice(3)
    }
}


/*
   17)

   Create a function to calculate the sum of the two given integers, 
   If the sum is in the range 50..80 return 65 other wise return 80.
*/

const calcSumWhenInRange = (n1, n2) => ((n1 + n2) >= 50 && (n1 + n2) <= 80) ? 65 : 80

/*
18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. 
Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

const convertNumberToString = (n) => {
    let resString = ''
    if (n % 3 === 0) {
        resString += "Diego"
    }
    if (n % 5 === 0) {
        resString += "Riccardo"
    }
    if (n % 7 === 0) {
        resString += "Stefano"
    }


    return resString
}


/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

const acronym = (str) => str.split(' ').reduce((acc, curr) => acc + curr.slice(0, 1).toUpperCase(), "")

console.log(acronym("British Broadcasting Corporation"));