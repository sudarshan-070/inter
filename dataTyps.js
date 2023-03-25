// let, var, const - 

// let message = 'This is the message'

// console.log(typeof(message));

// primative and non-primative 

// string 

let message = 'This is the message'
let str = "This is the string"
let str1 = `This is the string in backticks`
let name = "Rishabh"
name = 'Pranav'
console.log(`Hello, ${name}`)
console.log(typeof(message));

// number 

// Infinity, -Infinity, NaN

let rollNo = 44
console.log(typeof(rollNo));
let notANumber = 1 * ""
console.log(typeof(notANumber));
let infi = 1 / 0
console.log(typeof(infi));
let num = 1.22222
num = 1


// BigInt

// greater than 2^53 - 1 ,  less than - 2^53 -1


// Boolean 

// true and false

let isGreater = 123 > 120 

let isAdmin = true 
let isStudent = false 

// null  -- nothing, empty, unknown value 

let isValid = null 

// undefined 

let isUndefined;

console.log(isUndefined);


// object 

let obj = {
    name: 'Ritesh',
    rollNo: "45",
    isStudent: true
}

typeof(obj.rollNo) // string
// but need to convert it into a number
Number(obj.rollNo) // typeof -- Number 

// now we convert boolean to string 
String(obj.isStudent) // typeof -- string 

// ########################## //

// not using correct variable names


let asd =  true
console.log(typeof(asd));  // boolean 

console.log('This is the string' * 3); //  NaN

console.log(typeof(1 / 0)); // Number 

console.log(1 + '1'); //  '11'

// 11 + '11'
// '1111'
// 11 - '11'
// 0
// 11 * '11'
// 121
// 11 / '11'
// 1
// 12 + 's'
// '12s'
// 12 - 's'
// NaN
// 12 / 's'
// NaN
// 12 * 's'
// NaN 

console.log('1' + '1')

// Boolean conversion

Boolean(1) // true 
Boolean('') //  false 
Boolean(' ') // true
Boolean(0) // false
Boolean('0 ') // true
Boolean('this is the string')

// Maths operation operators 

// +, -, *, /, %, **