// indexOf, findIndex, includes, find, Math...

const array = [1, 5, 3, 5, 69, "n", "N"]
// const array = [
//     {
//         id: 1,
//         name: "user 1",
//         roles: ["adnmin"],
//     },
//     {
//         id: 2,
//         name: "user 2",
//         roles: ["adnmin", "guest"],
//     },
//     {
//         id: 3,
//         name: "user 3",
//         roles: [],
//     },
//     {
//         id: 10,
//         name: "user 3",
//     },
//     {
//         id: 11,
//         name: "user 34",
//         roles: ["guest"],
//     },
// ];
//1.in ra nhung user co role la guest
// array.filter(function (item, index) {
//     return item.roles === undefined ? item.roles = "" : item.roles.includes("guest")
// }).map(function (val) {
//     console.log(val);
// });
//2.in ra nhung user khong co roles
// array.filter(function (item, index) {
//     return item.roles === undefined || item.roles == "";
// }).map(function (val) {
//     console.log(val);
// });

// const numbers = [2, 4, 6, 8, 9, 10, 45, 55]
// //kiem tra xem so 9 co trong mang hay khong
// console.log(numbers.includes(9));
// // kiem tra so 5 co ton tai trong mang hay khong
const idx = array.indexOf("n");
// const idx = array.findIndex((val, index) => {
//     return val === 5;
// });
console.log(idx)
// //phuong thuc tra ve vi tri (index) xuat hien dau tien
// //neu co: thi tra ve index dau tien
// //neu khong thi tra ve -1
// console.log(idx);
//kiem tra xem co user nao co id > 5 hay khong
// const idx = array.findIndex((val, index) => {
//     return val.id > 5;
// });
// var exist = true;
// idx != -1 ? exist = true : exist = false;
// console.log(exist);

// //in ta user co id =10
// const user = array.find((val, index) => {
//     return val.id === 10
// });
// console.log(user);

// //in ra mang cac user co  id  > 5
// const newArr = array.filter((val, index) => {
//     return val.id > 100
// }, [])
// console.log(newArr)



