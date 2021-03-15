$(function () {
    let products = [];
    let cart = [];
    const api = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

    $.get(api, function (data) {
        products = data;
        data.map(val => {
            $(`<div class="col-sm-3">
            <div data-id=${val.id} class="item">
                <img src=${val.image} alt="item image">
                <h2>${val.name}</h2>
                <span>Price: ${val.price}$</span>
                <br>
                <span>Category: ${val.category}</span>
                <br>
                <button class="add">Add to cart</button>
            </div>
        </div>`).appendTo(".products .row");
        })

    });

    $("body").on("click", ".add", function () {
        const currentId = $(this).parents(".item").data("id");
        const currentItem = products.find((val) => val.id === currentId);

        //cart = [...cart, currentItem];
        //check cai item da co trong cart chua
        const idx = cart.findIndex(val => val.id === currentId);
        if (idx === -1) {
            currentItem.quantity = 1;
            currentItem.total = currentItem.quantity * currentItem.price;
            cart.push(currentItem)
        } else {
            cart[idx].quantity += 1;
            cart[idx].total = cart[idx].quantity * cart[idx].price
        }
        const quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        $(".quantity-item").text(`${quantity}`);

        const total = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        $(".total").text(`Total price: ${total}$`)
        $(".cart-list").empty();

        cart.map(val => {
            $(`
            <li>${val.name} - quantity: ${val.quantity} - total: ${val.total}$</li>
        `).appendTo(".cart-list");
        })

    })
});