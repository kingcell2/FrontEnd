// spread operator -> array, object
const nums = [1, 2, 4]
//copy mang nums
// const newNum = [...nums]
// console.log(newNum);
//tim max
// console.log(Math.max(...nums));

const users = [
    {
        id: 1,
        name: "user 1",
    },
    {
        id: 2,
        name: "user 2",
    },
    {
        id: 3,
        name: "user 3",
    },

]
// console.log([100, 200, "hello", ...nums]);
// console.log([
//     ...users,
//     {
//         id: 4,
//         name: "user 4",
//     }
// ]);

//update thang co id:2, thanh user 100
//reference type. primitive type
const ss = users.filter((val, index) => {
    if (val.id === 2) {
        return val.name = "user 100"
    } return val;
});
console.log(users);
