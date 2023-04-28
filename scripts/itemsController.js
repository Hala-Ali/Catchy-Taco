class ItemsController {
    constructor() {
        this.items = [];
        this.currentId = 0;
    }
    addItem(name, description, img, createdAt) {

        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            img: img,
            createdAt: createdAt,
        };
        
        this.items.push(item);
    }
}