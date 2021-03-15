$(function () {
    const api = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    let products = [];
    let cart = [];
    $.get(api,
        function (data) {
            products = data;
            data.map(val => {
                $(`<div class="col-sm-4">
             <div class="item" data-id=${val.id}>
                 <img src=${val.image} alt="">
                 <span>Price:$ ${val.price} </span>
                 <button>Add to cart</button>
             </div>
         </div>`).appendTo(".products .row")
            })
        },

    );
    $("body").on("click", "button", function () {
        const id = $(this).parents(".item").data("id");
        // localStorage.setItem("id", id);
        const item = products.find(val => val.id === id)
        //console.log(item);
        cart.push(item);
        // JSON.stringify(item); // chuyen obj qua string(json)
        localStorage.setItem("cart", JSON.stringify(cart))

    })
})