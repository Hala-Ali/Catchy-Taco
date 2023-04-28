const $ = (_) => document.getElementById(_);

// const controller = new ItemsController;

console.log("Hello");
function addItemCard(img, itemName, desc) {
    let codeBlock = `<div class="card border-primary" style="margin-bottom: 20px; height: 300px; width: 300px;">
    <img class="card-img-top" src="${img}" alt="">
    <div class="card-body">
        <h4 class="card-title">${itemName}</h4>
        <p class="card-text">${desc}</p>
    </div>
</div>`;
    $('item-list').innerHTML += codeBlock;
    
    }


// localStorage.setItem('items', JSON.stringify(sampleItems));