$(function () {
    const products = [
        {
            id: 1,
            name: "Apple",
            price: 5,
            categories: ["Man"],
            img: "https://salt.tikicdn.com/cache/280x280/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg",
        },
        {
            id: 2,
            name: "Samsung",
            price: 20,
            categories: ["Man", "Woman"],
            img: "https://salt.tikicdn.com/cache/280x280/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg",
        },
        {
            id: 3,
            name: "Viettel",
            price: 15,
            categories: ["Man", "Woman", "Release"],
            img: "https://salt.tikicdn.com/cache/280x280/ts/product/36/bd/31/38cfa79d6213fb948a13ad20b0b9d617.jpg",
        },
    ];
    //load product
    renderProducts(products);

    // $(".btn-search").click(function (e) {
    //     e.preventDefault();
    //     const searchInput = $(".search-item").val();
    //     const filterProducts = products.filter(val => {
    //         return val.name.toLowerCase().includes(searchInput.toLowerCase());
    //     });
    //     renderProducts(filterProducts);
    // });

    //keydown: nhan phim do  xuong
    // keyup: tha phim ra
    $(".search-item").keyup(function (e) {
        e.preventDefault();
        const searchInput = $(".search-item").val();
        const filterProducts = products.filter(val => {
            return val.name.toLowerCase().includes(searchInput.toLowerCase());
        }).map(val => {
            return {
                ...val,
                name: val.name.split(searchInput).join(`<span style="color: red">${searchInput}</span>`)
            }
        })
        renderProducts(filterProducts);
    });
    $(".filter-item").change(function (e) {
        e.preventDefault();
        //console.log($(".filter-tem").val());
        const filterValue = $(this).val();
        switch (filterValue) {
            case "":
                renderProducts(products)
                break;
            case "greater10":
                const greaterProducts = products.filter(val => val.price >= 10)
                renderProducts(greaterProducts)
                break;
            case "lesser10":
                const lesserProducts = products.filter(val => val.price <= 10)
                renderProducts(lesserProducts)
                break;
            default:
                break;
        }
    });
});

function renderProducts(products) {
    //xoa het item con
    $(".products .row").empty();

    //load cac san pham
    if (products.length) {
        products.map(val => {
            $(`
            <div class="col-sm-4">
                        <div class="item">
                            <img src=${val.img} alt="">
                            <h2>${val.name}</h2>
                            <span>${val.price}$</span>
                        </div>
                    </div>
            `).appendTo(".products .row");

        });
    } else {
        $(`<h1>No Products Found! </h1>`).appendTo(".products .row")
    }

}