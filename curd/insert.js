var selectedRow = null;

const Name = document.getElementById("Name");
const Qty = document.getElementById("Qty");
const Price = document.getElementById("Price");
const Images = document.getElementById("Image");

const btn = document.getElementById("btn");

const btn_clear = document.getElementById("clearData");
index = 1;
let items = JSON.parse(localStorage.getItem('items') ?? "[]");
renderTable();


// Show data to table

function renderTable() {

    const list = document.getElementById("Item_list");

    list.innerHTML = "";
    items.forEach((items, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${items.name}</td>
            <td>${items.qty}</td>
            <td>${items.price}</td>
            <td><img src="${items.img}" style="width: 100px; higth:100px;" id="item_img"></img></td>

            <td><button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button></td>
        `
        list.appendChild(row);
    });
};

btn_clear.addEventListener("click", function () {
    if (confirm("Clear all item?")) {
        items = [];
        localStorage.removeItem("items")
        renderTable()
    }
})

// Add data //
btn.addEventListener('click', function () {

    const Item_Name = Name.value;
    const Quanty = Qty.value;
    const Item_price = Price.value;
    const ImageURL = Images.value;
    if (Item_Name == "" || Quanty == "" || Item_price == "") {
        alert("missing data");
        return;
    }
    items.push({
        name: Item_Name,
        qty: Quanty,
        price: Item_price,
        img: ImageURL
    })

    localStorage.setItem("items", JSON.stringify(items));
    alert("add complet");

});

