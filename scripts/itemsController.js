class ItemsController {
    constructor() {
        this.items = [];
        this.currentId = 0;
    }
    addItem(name, description, img, createdAt) {
        itemsController.currentId++;
        const item = {
            id: this.currentId,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt,
        };
        itemsController.items.push(item);
    }
}

function loadItemsFromLocalStorage() {
    const storageItems = localStorage.getItem("items");
    if (storageItems) {
        const _items = JSON.parse(storageItems);
        this.items = _items;
    }
}

