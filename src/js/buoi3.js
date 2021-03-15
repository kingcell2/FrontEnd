// split
// tra ve mot mang moi
// tach 1 chuoi thanh 1 mang moi, bang 1 seperator
// let str = "hello WORLD viet nam";
// const newArr = str.split(" ");
// console.log(newArr.length);

// thay the tat ca chu "o" bang "aaa"
// output : "Hellaaa hellaaa 123 123"
// const newArr = str.split("o").join("aaa");
// console.log(newArr)

//tinh do dai cua string khong bao gom space
//const newArr = str.split(" ").join("");

// console.log("Viet hoa: ", str.toUpperCase());
// console.log("Viet thuong: ", str.toLowerCase());
// console.log(str[1]);

//Viet hoa chu cai dau tien
// const newW = str.split(" ");
//console.log(newW);
// for (let i = 0; i < newW.length; i++) {
//     const newArr = newW[i].split("");
//     newArr[0] = newArr[0].toUpperCase();
//     newW[i] = newArr.join("")
// }
// console.log(newW.join(" "));

// chuyen chu hoa thanh chu thuong, chu thuong thanh chu hoa
let str = "hello WORLD viet nam";
// for (let i = 0; i < str.length; i++) {
//     let arr = '';

//     let charcode = str.charCodeAt(i);
//     if (charcode > 64 && charcode < 91) {
//         arr += str.toLowerCase();
//     }
//     if (charcode > 96 && charcode < 123) {
//         arr += str.toUpperCase();
//     }
//     return arr;
// }
// console.log(arr);

// function convertString(str) {
//     var result = '';

//     for (var i = 0; i < str.length; i++) {
//         var code = str.charCodeAt(i);
//         if (code > 64 && code < 91) {
//             result += String.fromCharCode(code + 32);
//         }
//         if (code > 96 && code < 123) {
//             result += String.fromCharCode(code - 32);
//         }
//     }
//     return result;
// }
// console.log(convertString(str));
