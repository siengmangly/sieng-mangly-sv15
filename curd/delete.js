function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    renderTable();
}

function deleteProduct(No) {
    order_detail.splice(No, 1);

    render_order_table();
    Product_total();
}