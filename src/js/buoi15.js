$(function () {
    const productsOwl = $(".products").owlCarousel();

    const data = [
        {
            id: 1,
            title: "item 11111",
            image: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            title: "item 22222",
            image: "https://picsum.photos/200/301",
        },
        {
            id: 3,
            title: "item 33333",
            image: "https://picsum.photos/200/302",
        },
        {
            id: 4,
            title: "item 444444",
            image: "https://picsum.photos/201/300",
        },
    ];

    $(".btn1").click(function (e) {
        e.preventDefault();
        renderOwl(".products", productsOwl, data);
    });
});

function renderOwl(selector, owl, list) {
    const len = $(selector).find(".item").length;
    // remove all items
    for (let i = 0; i < len; i++) {
        owl.trigger("remove.owl.carousel", [i]).trigger("refresh.owl.carousel");
    }
    // add new owl
    for (let i = 0; i < list.length; i++) {
        owl.owlCarousel(
            "add",
            ` <div class="item">
              <img src=${list[i].image} alt="">
              <h2>
                  ${list[i].title}
              </h2>
          </div>`
        );
    }
    owl.trigger("refresh.owl.carousel");
}