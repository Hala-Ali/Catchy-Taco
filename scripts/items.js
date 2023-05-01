const $ = (_) => document.getElementById(_);

itemsController = new ItemsController;

function addItemCard(img, itemName, desc) {
    let codeBlock = `<div class="card border-primary" style="margin-bottom: 20px; height: 300px; width: 300px;">
    <img class="card-img-top" src="${img}" alt="">
    <div class="card-body">
        <h4 class="card-title">${itemName}</h4>
        <p class="card-text">${desc}</p>
    </div>
</div>`;
    $('item-list').innerHTML += codeBlock;
    itemsController.addItem(itemName, desc, img, Date());
    }

function saveItems() {
    const sampleItems = JSON.stringify(itemsController.items);
    localStorage.setItem('items', sampleItems);
}

function populateData() {
    parsed_list = JSON.parse(localStorage.items);
    parsed_list.forEach(item => 
        addItemCard(item.img, item.name, item.description))
}
