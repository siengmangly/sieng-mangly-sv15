// function image_load () {
//     document.getElementById("Image").addEventListener("change", function () {
//         // console.log(this.files);
//         const reader = new FileReader();

//         reader.addEventListener("load", () => {
//             // console.log(reader.result);
//             localStorage.setItem("recent_image", JSON.stringify(reader.result));
//         });

//         reader.readAsDataURL(this.files[0]);
//     });

//     document.addEventListener("DOMContentLoaded", () => {
//         const recentimagedataUrl = JSON.parse(localStorage.getItem("recent_image") ?? []);

//         if (recentimagedataUrl) {
//             document.getElementById("item_img").setAttribute("src", recentimagedataUrl);
//         }
//     });
// }

let product_list = JSON.parse(localStorage.getItem("items")) ?? "[]";

const order_detail = [];

const render_Product_Card = document.getElementById("render_product_card");

renderProductCard();

function renderProductCard() {
    let html_card = "";
    product_list.forEach((items, index) => {
        html_card += ` 
        <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${items.img}" alt="">
                    <div class="card-body">
                        <h4 class="card-title" id="${items.name}">${items.name}</h3>
                        <h4 id="${items.price}" value="${items.price}">${items.price}$</h4>
                    <button onclick="buybtn(${index})" class="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
        `
        console.log(html_card);
        render_Product_Card.innerHTML = html_card;
    });
};

function buybtn(index) {
    console.log(index);

    const product = product_list[index];

    order_detail.push({
        names: product.name,
        prices: product.price,
        qtys: product.qty
    })
    console.log(order_detail);

    render_order_table();
    Product_total();
}

function render_order_table() {
    const render_table_list = document.getElementById("product_detail");

    render_table_list.innerHTML = "";
    order_detail.forEach((product, No) => {
        const product_row = document.createElement("tr");

        product_row.innerHTML = `
            <td>${No + 1}</td>
            <td>${product.names}</td>
            <td>${product.prices}$</td>
            <td>${product.qtys}</td>
            <td><button class="btn btn-danger" id=btn_remove onclick="deleteProduct(${No})">Remove</button></td>
        `
        render_table_list.appendChild(product_row);
    })
}

// Total Product
function Product_total() {

    let total = 0;
    let KhTotal = 0;

    let discount = document.getElementById("Discount");

    order_detail.forEach(product => {

        total += parseFloat(product.prices); 

        KhTotal = total * 4100;
    });

    const displayTotal = document.getElementById("showTotal");

    const displaykhTotal = document.getElementById("khTotal");

    const displayDiscount = document.getElementById("Display_Discount");

    const displayGrandTotal = document.getElementById("Display_GrandTotal");

    if (displayTotal) {
        displayTotal.innerText = total + "$";
        
        if (displaykhTotal) {
            displaykhTotal.innerText = KhTotal + "KHR";
        }
    }

    // Discount
    discount.addEventListener("change", () => {
        let values = discount.value;
        let orignal_total = total;
        console.log(values);

        if (values) {
            after_discount = orignal_total * (1 - parseInt(values) / 100);

            displayDiscount.innerText = after_discount.toFixed(2) + "$";

            displayGrandTotal.innerText = after_discount.toFixed(2) + "$";

            const Grand_total = after_discount;
            const btn_change = document.getElementById("btn_change");
            const received = document.getElementById("btn_change");

            const discplayChange = document.getElementById("Display_change");
            btn_change.addEventListener("click", function () {

                const receiveds = received.value;

                total = receiveds - Grand_total;
                console.log(total);

                discplayChange.innerText = total.toFixed(2) + "$";
            })
        };
    });
    console.log(total);
    
}

