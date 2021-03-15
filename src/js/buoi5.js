//array
//const number = [1, 2, 3, 4];
//object
// const user = {
//     name: "hello",
//     age: 18,
// }
// user.address = "97 man thien"; // them doi tuong vao obj
// console.log(user)


const users = [
    { name: "girl 1", age: 18, price: 43 },
    { name: "girl 2", age: 20, price: 12 },
    { name: "girl 3", age: 50, price: 50 },
    { name: "girl 4", age: 25, price: 10 },
    { name: "girl 5", age: 26, price: 100 },
]
// in ra tong age cua user
// var total = 0;
// let i = 0;
// while (i < users.length) {
//     total += users[i].age;
//     i++
// }
// console.log(total);

//for, for-in, for-of, for-each
//===================
//map - tra ve 1 mang moi, co so luong pt = mang cu, gia  tri tra ve nam sau return
// const newUsers = users.map((val, index) => {
//     return val.age > 20;
// });
// // vong lap 1: val =     { name: "user 1", age: 18 }
// // vong lap 2: val =     { name: "user 1", age: 20 }
// // vong lap 3: val =     { name: "user 1", age: 50 }
// console.log(newUsers)
//====================
//filter -> tra ve gia tri val neu thoa man dieu khien sau return(true)
//in ra mang gon cac phan tu co age > 25
// const result = users.filter(users => users.age > 25);

// const result = users.filter((val, index) => {
//     return val.age > 25
// })
// console.log(result)
//tính tổng số tuổi của những user có age > 20
// const newUsers = users.filter((val, index) => {
//     return val.age > 20;
// });
// let sum = 0;
// for (let val of newUsers)
//     sum += val.age;
// console.log(sum);

// kiem 1 em age<=20 va co price <30 -> in ra tên em đó
const result = users.filter((val, index) => {
    return val.age <= 25 && val.price < 30
})
for (const i in result) {
    console.log(result[i].name)
}