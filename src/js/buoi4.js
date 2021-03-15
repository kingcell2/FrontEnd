// let a = 136;
// console.log(a.toString().split("")) // parseInt chuyen 1.6 thanh so 1
// console.log(Number("1.6")) //Number chuyen 1.6 thanh so 1.6

/*
//vong lap trong javascript -> iteration
+ for
+ while
+ for - in (cach nho:)
+ for - while
*/
const array = [1, 5, 4, 8];
array.forEach((val, index) => {
    console.log(`${index} - ${val}`)
});
parse
// for (const i in array) {
//     console.log(array[i])
// }
/*
// function trong js
+ cach 1: function declartion
+ cach 2: function expresstion
+ cach 3: arrow function
*/
// function printName(name, age) {
//     console.log(`${name} co age la ${age}`)
// };


// const printName = function (name, age) {
//     console.log(`${name} co age la ${age}`)
// };
// printName("user 1", 20);


// dinh nghia arrow function "add", nhan 2 tham so a,b
// tra ve ket qua la tong cua a + b
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(3, 4))
