$(document).ready(function () {
    $(".updateUser").hide();
    $(".updateProduct").hide();
    $(".updateOrder").hide();
})
// code for delete user
function deleteUser(data) {
    let id = data.id;
    $.ajax({
        url: 'admin/user',
        data: { "id": id, "type": 'Delete' },
        type: 'post',
        datatype: 'json'
    }).done(function () {
         window.location = 'admin';
    })
}
// code for edit user
async function editUser(data) {
    let id = data.id.split("_");
    id = id[1];
    $(data).parent().parent().children().children().removeAttr('readonly');
    $("#update_" + id).show();
    $("#edit_" + id).hide();

}
// code for update user
function updateUser(data) {
    let id = data.id.split("_");
    id = id[1];
    let name = $("#name_" + id).val();
    let email = $("#email_" + id).val();
    let role = $("#role_" + id).val();
    let pin = $("#pin_" + id).val();
    let pswd = $("#pswd_" + id).val();
    $.ajax({
        url: 'admin/user',
        data: { 'id': id, "type": 'edit', 'name': name, 'email': email, 'pin': pin, 'role': role, 'pswd': pswd },
        type: 'post',
        datatype: 'json'
    }).done(function () {
        $(data).parent().parent().children().children().attr('readonly');
        $("#update_" + id).hide();
        $("#edit_" + id).show();
          window.location = 'admin';
        
    })
}
// code for delete product
function deleteProduct(data) {
    let id = data.id;
    $.ajax({
        url: 'admin/product',
        data: { "id": id, "type": 'Delete' },
        type: 'post',
        datatype: 'json'
    }).done(function () {
         window.location = 'admin';
    })
}
// code for edit product
async function editProduct(data) {
    let id = data.id.split("_");
    id = id[1];
    $(data).parent().parent().children().children().removeAttr('readonly');
    $("#update_" + id).show();
    $("#edit_" + id).hide();

}
// code for update product
function updateProduct(data) {
    let id = data.id.split("_");
    id = id[1];
    let name = $("#name_" + id).val();
    let qty = $("#qty_" + id).val();
    let price = $("#price" + id).val();
    let desc = $("#desc" + id).val();
    $.ajax({
        url: 'admin/product',
        data: { 'id': id, "type": 'edit', 'name': name, 'qty': qty, 'price': price, 'desc': desc },
        type: 'post',
        datatype: 'json'
    }).done(function () {
        $(data).parent().parent().children().children().attr('readonly');
        $("#update_" + id).hide();
        $("#edit_" + id).show();
         window.location = 'admin';
    })
}
// code for delete order
function deleteOrder(data) {
    let id = data.id;
    $.ajax({
        url: 'admin/order',
        data: { "id": id, "type": 'Delete' },
        type: 'post',
        datatype: 'json'
    }).done(function () {
         window.location = 'admin';
    })
}
// code for edit order
async function editOrder(data) {
    let id = data.id.split("_");
    id = id[1];
    console.log(id);
    $(data).parent().parent().children().children().removeAttr('readonly');
    $("#updateOrder_" + id).show();
    $("#editOrder_" + id).hide();
}
// code for update order
function updateOrder(data) {
    let id = data.id.split("_");
    id = id[1];
    console.log(id);
    let order_id = $("#order_id" + id).val();
    let product_id = $("#product_id" + id).val();
    let user_id = $("#user_id" + id).val();
    let qty = $("#qty" + id).val();
    let price = $("#price" + id).val();
    $.ajax({
        url: 'admin/order',
        data: { 'id': id, "type": 'edit', 'order_id': id, 'product_id': product_id, 'user_id': user_id, 'qty': qty, 'price': price },
        type: 'post',
        datatype: 'json'
    }).done(function () {
        $(data).parent().parent().children().children().attr('readonly');
        $("#update_" + id).hide();
        $("#edit_" + id).show();
         window.location = 'admin';
    })
}