//snipets => tong hop cac cu phap viet tat
$(function () {
    //console.log($(".hello").html("hello worlld"))
    //addEvenListener
    // $("button").click(function (e) {
    //     e.preventDefault();
    //     $("h1").text("hello world");

    // });

    // TODO list
    let list = [
        {
            id: 1,
            task: "Shopping",
            done: true,
        },
        {
            id: 2,
            task: "Football",
            done: true,

        },
        {
            id: 3,
            task: "Game",
            done: false,

        },
    ]
    //load list array to html
    //dung appendTo them phan tu con(vao phia  sau cung)
    // prependTo them vao dau
    renderList(list)
    //cách 1
    $(".add").click(function (e) {
        e.preventDefault();
        let task = $(".task").val(); // val(): lay gia tri input, select
        //dung spread operator de add pt vao mang
        if (task) {

            list = [
                ...list,
                { id: Math.floor(Math.random() * (1000 - 10) + 10), task },
            ];

            renderList(list)
            $(".task").val("");
        }
    });
    $("body").on("click", ".delete", function () {
        let id = $(this).data("id");
        list = list.filter((val) => val.id !== id)
        renderList(list)
    })
    let idx, id;

    $("body").on("click", ".update", function () {
        id = $(this).data("id");
        idx = list.findIndex((val) => val.id === id);
        $(".task").val(list[idx].task);

        $(".btn-update").click(function (e) {
            e.preventDefault();
            const task = $(".task").val();
            list[idx].task = task;
            // list = [...list.slice(0, idx), { id, task }, ...list.splice(idx + 1)];
            renderList(list);
        });
    })
    $("body").on("click", ".item", function () {
        $(this).toggleClass("active")
    })
})
//cách  2
//     $(".add").on("click"(function (e) {
//         e.preventDefault();
//         let task = $(".task").val(); // val(): lay gia tri input, select
//         //dung spread operator de add pt vao mang
//         list = [...list, { id: Math.floor(Math.random() * (1000 - 10) + 10), task }];

//         renderList(list)
//         $(".task").val("");
//     });

//     $("body").on("click", "delete", function () {
//         console.log("delete");
//     });
// });

function renderList(list) {
    $(".list").empty(); // xoa pt con
    list.map((val) => {
        val.done
            ? $(
                `<li ><span style="margin-right: 30px" class="item active">${val.task}</span><span  data-id=${val.id} class="update"> update</span> <span  data-id=${val.id} class="delete"> delete</span></li>`
            ).appendTo(".list")
            : $(`<li ><span style="margin-right: 30px" class="item">${val.task}</span><span  data-id=${val.id} class="update"> update</span> <span  data-id=${val.id} class="delete"> delete</span></li>`
            ).appendTo(".list")
    })
}