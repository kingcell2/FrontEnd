//cau 1
// var input = [-1, -3, 23, "345", "200"]
// function solution(input) {
//     // Tìm số lớn nhất trong mảng
//     var max = input[0];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] > max) {
//             max = input[i];
//         }
//     }
//     return max;
// }
// console.log(solution(input))

//cau2
// function solution(input){
//     /*
//     Tìm chuỗi có độ dài lớn nhất
//     Trường hợp có nhiều chuỗi cùng độ dài lớn nhất thì in ra mảng
//     */
//     const arr = input.split(" ")
//     let max = 0;
//     var newArr =[]
//     let i = 0;
//     do{
//         if(arr[i].length > max){
//             max = arr[i].length
//         }
//         i++;
//     }while(i < arr.length)
//     let j = 0;
//     do{
//         if(arr[j].length == max){
//             newArr.push(arr[j])
//         }
//         j++
//     }while(j < arr.length)
//     if (newArr.length != 1) return newArr;
//     else return newArr[0]
//     }

//cau 3
// function solution(input){
//     /*
//     Tìm chuỗi có độ dài lớn nhất
//     Trường hợp có nhiều chuỗi cùng độ dài lớn nhất thì in ra mảng
//     */
//     const arr = input.split("");
//     const str = "empty string";
//     if(input!="" && input.charCodeAt() !=32){
//         let i = 0;
//          do{
//             if (arr[i].charCodeAt() >64 && arr[i].charCodeAt() < 91) {
//             arr[i] = arr[i].toLowerCase();
//             }
//             else if (arr[i].charCodeAt() >96 && arr[i].charCodeAt() <123) { 
//             arr[i] = arr[i].toUpperCase(); 
//             }
//             i++;
//         }while(i<arr.length);
//     }
//       else return str;
//     return arr.join("");
//     }
//cach 2
// function solution(input){
//     /*
//     Đổi in hoa thành in thường và ngược lại
//     */ 
//     const arr = input.split("");
//     var str ="empty string"
//      if(input!="" && input.charCodeAt() !=32){
//           for (var i = 0; i < arr.length; i++) {
//             var code = input.charCodeAt(i)
//             if (code > 64 && code < 91) {
//               arr[i] = String.fromCharCode(code + 32)
//             } 
//             else if (code > 96 && code < 123)  {
//               arr[i] = String.fromCharCode(code - 32)
//             }
//           }
//      } else return str;
//      return arr.join("");
//     }
//cau 4
// function solution(input){
//     /*
//     Tính tổng các chữ số
//     Ví dụ: 136 => 1 + 3 + 6 = 10
//     */  
// let sum = 0;
// let temp;
// if(input === 0){
//     return 0;
// }
// else if(input < 0){
//     return "Invalid input";
// }
// if(input !==0) {
//     for(;input!==0;){
//         temp = input % 10;
//         sum += temp;
//         input = parseInt(input / 10);
//     }
// }
// return sum;
//     }
// cau4 - cach 2
// function solution(input){
//     /*
//     Tính tổng các chữ số
//     Ví dụ: 136 => 1 + 3 + 6 = 10
//     */
//     const numberArray = input.toString().split("");
//     let total = 0;
//     if(input>=0){
//       for(let i of numberArray){
//         total += Number(i);
//     }  
//     }
//     else return "Invalid input";
//     return total;
//     } 

// // cau5
// function solution(input){
//     /*
//     Giả sử input là 1 password của 1 user
//     Tạo chuỗi gồm kí tự đầu và cuối của password ban đầu
//     Các kí tự còn lại dược thay bằng dấu *
//     */
// const str = input.length;
// let arr = "";
// if(str == 0) return "";
// if(str == 1 || str ==2) return '*'.repeat(str);
// else{
//     for(let i = 0; i < str ; i++){
//         arr = input[0] + '*'.repeat(str-2) + input[str-1]    ;
//     }
// }
// return arr;
//     }

//cau8
// input = [1, 2, 3, 4, 5, 6, 6, 3]
// function solution(input) {
//     /*
//     Xác định input có phải là 1 "special array" hay không
//     "special array" được định nghĩa là:
//     + giá trị tại vị trí index chẳn sẽ là số chẳn
//     + giá trị tại vị trí index lẽ sẽ là số lẽ
//     */
//     let ans = [];
//     if (input.length == 0) return false;
//     for (let i = 0; i < input.length; i++) {
//         if (i % 2 !== 0) {
//             if (input[i] > 0 && input[i] % 2 !== 0) ans.push(1);
//             else ans.push(0);
//         }
//         else if (i % 2 === 0) {
//             if (input[i] > 0 && input[i] % 2 === 0) ans.push(0);
//             else ans.push(1);
//         }
//     }
//[0->1->0...] == true
//[0,1,1,0,1,0,1] == false
// for (let j = 0; j < ans.length; j++) {
//     if (ans.length <= 1) {
//         if (ans[0] === 0) return true;
//         else return false;
//     }
//     else if (ans.length > 1) {
//         if (ans[j] != ans[j + 1] && ans[j + 1] != ans[j + 2]) return true;
//         else return false;
//     }
// }
//     return ans;
// }
// console.log(solution(input))
// console.log(solution(input))
//cau 9
// function solution(input){
//     /*
//     Sắp xếp mảng theo thứ tự tăng dần
//     Lưu ý: không áp dụng cho string
//     */
//     //Interchange Sort - Sắp xếp đổi chỗ trực tiếp 
// const valueRemove = ["hello","1","5","3"]
// var tmp = [];
// for (let i = 0; i < input.length; i++) {
//     if (typeof (input[i]) === "number") {
//         tmp.push(input[i])
//     }
//}
// for (let i = 0; i < newArr.length - 1; i++) {
//     for (let j = i + 1; j < newArr.length ; j++) {
//       if (newArr[j] < newArr[i]) {
//         let temp = newArr[i];
//         newArr[i] = newArr[j]
//         newArr[j] = temp
//       }
//     }
//   }
//   return newArr;
//     }
//cau 10
//let input = ["hello", "abcxy"]
// function solution(input) {
//     /*
//     So sánh các string trong chuỗi có giống nhau hay không
//     Không phân biệt hoa thường
//     */
//     let arr = []
//     for (let i of input) {
//         i = i.toLowerCase();
//         arr.push(i)
//     }
//     if (input.length > 0) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === arr[j + 1]) return true;
//             else return false;
//         }
//     } else return false;
// }
// console.log(solution(input))
// input = [1, 2, 3, 4, 5, 6, 7];
// function solution(input) {
//     /*
//     Tạo mảng gồm các cặp số (số đầu và số cuối)
//     Nếu số lượng phần tử lẻ thì lặp lại phần tử ở giữa và đặt ở cuối mảng
//     */
//     const newArr = [];
//     for (let i = 0; i < input.length / 2; i++) {
//         newArr.push([input[i], input[input.length - i - 1]])
//     }
//     return newArr;
// }
// console.log(solution(input));

//regular expresstion
var array = [1, 2, 3, 1, 4, 2, 5];
var arrFilter = array.filter((item, index) => array.indexOf(item) !== index);
console.log(arrFilter);