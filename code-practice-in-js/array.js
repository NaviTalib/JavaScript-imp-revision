let myArr = [1,2,3,4,5,6,7,8];
let newArr = [10,11,12]

// console.log(Array.isArray(myArr))  //checking array or not

// console.log(myArr.indexOf(5)) // returns index of element

let x = 98;
// myArr.push(x); // push() used for add a element in end of array
// console.log(myArr);

// console.log(myArr.pop()); // remove element from end of array

// myArr.unshift(x)  add element in start of a array
// console.log(myArr)

// myArr.shift() // remove element from start of array.
// console.log(myArr)

// console.log(myArr.reverse())

// console.log(myArr.concat(newArr)) //joining to array 


myArr.splice(1, 0, 'two');
// Inserts at index 1
console.log(myArr);
myArr.splice(5,1,'five');
console.log(myArr)

//To create a new array with a segment removed and/or replaced without mutating the original array

