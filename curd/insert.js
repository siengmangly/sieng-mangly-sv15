var selectedRow = null;

// let item = JSON.parse(localStorage.getItem('item') ?? '[]');

// document.querySelector("#Item_form").addEventListener("submit", (e) =>{
//     e.preventDefault();

//     const Name = document.querySelector("#Name").value;
//     const Qty = document.querySelector("#Qty").value;
//     const Price = document.querySelector("#Price").value;


//     if(Name == "" || Qty == "" || Price == ""){
//         alert("gg");
//     }
//     else{
//         if(selectedRow == null){

//             item.push({
//                 Name,
//                 Qty,
//                 Price
//             })

//             localStorage.setItem('item,', JSON.stringify(item));

//             const list = document.querySelector("#Item_list");
//             const row = document.createElement("tr");

//             row.innerHTML = `
//                 <td>${Name}<td> 
//                 <td>${Qty}<td>
//                 <td>${Price}<td>
//             `;
//             list.appendChild(row);
//             selectedRow =null;
//             alert("create");
//         };
//     };
// });

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
            <td><button class="btn btn-primary" onclick="">Edit</button></td>
            <td><button class="btn btn-danger" onclick="deleteItem(${index})">Delete</button></td>
        `
        list.appendChild(row);
    });
};

// delete data //

// function deleteItem(index) {
//     items.splice(index, 1);
//     localStorage.setItem("items", JSON.stringify(items));
//     renderTable();
// }

// Clear data //

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




// localStorage.clear();

// else {
//     if (selectedRow == null) {

//         const list = document.getElementById("Item_list");
//         const row = document.createElement("tr");


//         row.innerHTML = `
//             <td>${Item_Name}<td>
//             <td>${Quanty}<td>
//             <td>${Item_price}<td>
//         `
//         list.appendChild(row);
//         selectedRow = null;
//         alert("add complet");
//     }
// }