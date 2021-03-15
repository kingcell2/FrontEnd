//alert("Hello world");
// trong js -> kieu du lieu dong > dynamic type
var a = 10;
var b = 20;
// //in ra cac so chan tu 0 - a
// var temp = "";
// for (let i = 0; i < a; i++) {
//     if (i % 2 === 0) {
//         temp += i;
//     }
// }
// console.log(temp);


// console.log(a + b);

// kiem tra bien a la so chan hay le

// if (a % 2 === 0) {
//     console.log("Chan")
// }
// else {
//     console.log("Le")
// }
// var result = a % 2 === 0 ? a + " là số chẵn" : a + " là số lẻ";
// console.log(result)
// output -> tong cua 10 va 20 la 1 so le
// var result = a + b;
// var res = result % 2 === 0
//     ? `tổng của ${a} và ${b} là một số chẵn`
//     : `tổng của ${a} và ${b} là một số lẽ`;
// console.log(res);

//template literal


// let str1 = "hello aa";
// let str2 = "hello bbb"

// let len1 = str1.length;
// let len2 = str2.length;

// if (len1 > len2) {
//     console.log(str1);
// } else {
//     console.log(str2);
// }


// Khi cộng mot so voi string => chuyen so qua chuoi
// console.log(10 + "10");
// Khi thực hiện phép trừ với số => string chuyển qua số
// console.log(10 - "10");

// var string = "12jh321jh3g";
// var number = 12344;
// var boolean = true;
// var undefined = undefined;
// var null = null;
// var nan = NaN;

var n = 20;
//in ra số chia hết cho 2 và 5 từ 0 - n
// output  "0,10,20"
var temp = "";
for (let i = 0; i <= n; i++) {
    if ((i % 2 === 0) && (i % 5 === 0)) {

        if (i < n) {
            temp += i + ",";
        } else temp += i;
    }

}
console.log(temp);