// object constructor
function Item(title, description, price, category, image) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.image = image;
}

function saveItem() {
    // get data
    var title = $("#inputTitle").val();
    var description = $("#inputDescription").val();
    var price = $("#inputPrice").val();
    var category = $(".form-check-input:checked").val();
    var image = $("#inputImage").val();

    // create object
    var newItem = new Item(title, description, price, category, image);

    // save object to back end
}

function init() {
    console.log('Init admin page');

    // initializations

    // events
    $("#btnSave").click(saveItem);
}

window.onload = init;