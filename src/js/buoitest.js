//cau18
// function solution(input) {
//     /*
//     Tính tổng những số chia hết cho 2 trong mảng
//     */
//    let sum = 0;
// for(let i in input) if(input[i]>0&&input[i]%2==0) sum += input[i]
// return sum;
// }
//cau19
// function solution(input){
//     /*
//     Chuyển mảng ban đầu thành mảng mới thoải mãn
//     + những số chia hết cho 2 sẽ đổi thành "hai"
//     + những số chia hết cho 3 sẽ đổi thành "ba"
//     + những số chia hết cho 2 và 3 sẽ đổi thành "hai ba"
//     */
//     const newArr = [];
//     for(let i in input){
//       if(input[i] > 0){
//           if(input[i] % 6 == 0 )  newArr.push("hai ba");
//           else if(input[i] % 2 == 0)  newArr.push("hai");
//           else if(input[i] % 3 == 0)  newArr.push("ba");
//           else newArr.push(input[i])
//       }
//      else newArr.push(input[i])
//     }
//     return newArr;
//     }

//cau20
// function solution(input) {
//     /*
//     In các kí tự trùng liên tiếp
//     */
//     const newArr = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] === input[i + 1]) newArr.push(input[i])
//     }
//     return newArr.filter((val, index) => {
//         return newArr.indexOf(val) == index;
//     })
// }