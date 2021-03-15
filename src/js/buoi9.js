//goi den DOM
//TODO: click vao nut .clickme
//lay gia tri trong o input la .value
//click vao nut, thi kiem tra neu dang pending thi chuyen qua "approve"
//kiem tra input nhap vao co phai la email hay khong
//.textContent = "new content" thay the 1 cai content moi
// email:  ton tai @gmail.com
document
    .getElementById("clickme")
    .addEventListener("click", () => {
        let length = document.getElementsByClassName("email")[0].value.length;
        console.log(document.getElementsByClassName("email")[0].value = "*".repeat(length));
    });
//click hide thi an, show thi hien