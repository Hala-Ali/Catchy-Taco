class ItemsController {
    constructor() {
        this.items = [];
        this.currentId = 0;
    }
    addItem(name, description, imageUrl) {
        itemsController.currentId++;
        const item = {
            id: this.currentId,
            name: name,
            description: description,
            imageUrl: imageUrl,
            // createdAt: createdAt, --also removed from params
        };
        itemsController.items.push(item);
        save(name, description, imageUrl);
        addItemCard(imageUrl, name, description);
        
    }
}

function getMenuItems() {
    // const data = {name, description, imageUrl};
    fetch('http://localhost:8081/item/all', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        }).then(response => response.json())
        .then(data => {
            console.log("Success: ", data);
            for (let taco of data) {
                addItemCard(taco.imageUrl, taco.name, taco.description);
            }
        }).catch((error) => {
            console.error('Error: ', error);
        });
}


function save(name, description, imageUrl) {
    const data = {name, description, imageUrl};
    fetch('http://localhost:8081/item', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
        }).then(response => response.json())
        .then(data => {
            console.log("Success: ", data);
        }).catch((error) => {
            console.error('Error: ', error);
        });
}

function update(id, name, description, imageUrl) {
    const data = {id, name, description, imageUrl};
    fetch('http://localhost:8081/item/' + id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
        }).then(response => response.json())
        .then(data => {
            console.log("Success: ", data);
        }).catch((error) => {
            console.error('Error: ', error);
        });
}

function findItemById(id) {
    const data = {};
    fetch('http://localhost:8081/item/' + id, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
        
        }).then(response => response.json())
        .then(data => {
            console.log("Success: ", data);
            document.getElementById('item-name').value = data.name;
            document.getElementById('item-desc').value = data.description;
            document.getElementById('item-img').value = data.imageUrl;
        }).catch((error) => {
            console.error('Error: ', error);
        });
    
}

function deleteItem(id) {
    const data = {};
    fetch('http://localhost:8081/item/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        }
        }).then(response => response.json())
        .then(data => {
            console.log("Success: ", data);
        }).catch((error) => {
            console.error('Error: ', error);
        });
}

function loadItemsFromLocalStorage() {
    const storageItems = localStorage.getItem("items");
    if (storageItems) {
        const _items = JSON.parse(storageItems);
        this.items = _items;
    }
}

getMenuItems();