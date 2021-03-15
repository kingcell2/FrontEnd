// const numbers = [1, 2, 5, 2, 1, 4, 5, 2, 657, 6534, 53, 234, 22, 4, 5, 4];
// const newNumbers = numbers.sort((a, b) => {
//     return a - b;
// })
// console.log(newNumbers)
//  gia tri return tra ve so  am(<0), thi a dung truoc b, hay sap xep tang dan
//  gia tri return tra ve so  duong(>0), thi b dung truoc a, hay sap xep giam dan
// const users = [
//     {
//         name: "user 1",
//         age: 17,
//     },
//     {
//         name: "user 2",
//         age: 20,
//     },
//     {
//         name: "user 3",
//         age: 5,
//     },
// ];
// sap xep cac user tuổi tăng dần
// const newUsers = users.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(newUsers)
// const numbers = [2, 6, 3, 2, 5]
// const total = numbers.reduce((acc, currenVal) => {
//     return acc + currenVal;
// })
/*
vong lap 1
acc = 2
currenVal = 6
return 8
vong lap 2
acc =8
currentVal = 3
return 11
*/
// total la gia tri sau cung cua acc
// console.log(total)
// const products = [
//     {
//         name: "item 1",
//         price: 20,
//     },
//     {
//         name: "item 2",
//         price: 15,
//     },
//     {
//         name: "item 3",
//         price: 8,
//     },
// ];
//reduce de tinh tong gia tri(price)
//cách hoạt động
//bước 1: check initalValue(giá trị khơi tạo) có hay không?
//bước 2: nếu có: thì ở vòng lặp 1, acc = initalValue, currentVal = array[0]
//bước 3: nếu có: thì ở vòng lặp 1, acc =array[0] , currentVal = array[1]

// const total = products.reduce((acc, val) => {
//     return acc + val.price;
// }, 0)
/*
/*vong lap 1
acc = 0 + 20
 acc ={
        name: "item 1",
        price: 20,
    },
    val = 15
*/
// console.log(total)

//ví dụ bài tập 7 - web
// input = [2,4,6,4,4]
// const array = [2, 4, 6, 4, 4]
// const newObj = array.reduce((acc, val, index) => {
//     // in: kiểm tra key có trong obj hay không?
//     /*
//     ví dụ: const user = {name:"user1",}; console.log(user) //true
//     */
//     // if (val in acc) acc[val] += +1
//     // else acc[val] = 1;
//     val in acc ? (acc[val] += +1) : (acc[val] = 1);
//     return acc;
// }, {});
// console.log(newObj);

//map, filter, reduce, sort,  for in, for of, forEach,g