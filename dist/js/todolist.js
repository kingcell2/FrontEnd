const list = [
    {
        id: 1,
        title: "Shopping",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Game",
        isCompleted: true,
    },
    {
        id: 3,
        title: "Crush",
        isCompleted: false,
    },
];

renderHtml(list);

let input = document.getElementsByClassName("todo-input")[0];

document
    .getElementsByClassName("btn-add")[0]
    .addEventListener("click", function () {
        // input , textarea , select - option
        let todo_input = input.value;
        const newTodo = {
            id: 4,
            title: todo_input,
            isCompleted: false,
        };
        list.unshift(newTodo);
        renderHtml(list);
        input.value = "";
    });

let btn_delete = document.getElementsByClassName("btn-delete");

for (let i = 0; i < list.length; i++) {
    btn_delete[i].addEventListener("click", function (e) {
        const id = e.target.getAttribute("data-id");
        console.log(id);
        list.splice(parseInt(id) - 1, 1);
        console.log(list);
        renderHtml(list);
        //   const newList = list.filter(function (val, index) {
        //     return val.id !== parseInt(id);
        //   });

        //   console.log(newList);
    });
}

function renderHtml(array) {
    document.getElementsByClassName("content")[0].innerHTML = "";
    array.map(function (val) {
        //data set
        const content = val.isCompleted
            ? `<li style="text-decoration: line-through">${val.title} <span class="btn-delete" data-id=${val.id}>DELETE</span> </li>`
            : `<li>${val.title} <span  class="btn-delete" data-id=${val.id}>DELETE</span></li>`;
        document.getElementsByClassName("content")[0].innerHTML += content;
        // if(val.isCompleted) {
        //     document.getElementsByClassName("content")[0].innerHTML += `<li style="text-decoration: line-through">${val.title}</li>`;
        // } else {
        //     document.getElementsByClassName("content")[0].innerHTML += `<li>${val.title}</li>`;
        // }
    });
}
