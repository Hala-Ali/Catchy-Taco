itemsController = new ItemsController;

console.log(itemsController);

const formsList = document.querySelectorAll('.form-control');



function populate() {
    console.log("Adding item");
    let itemName = document.getElementById('item-name').value;
    let itemDesc = document.getElementById('item-desc').value;
    let itemImg = document.getElementById('item-img').value;
    itemsController.addItem(itemName, itemDesc, itemImg, Date());
    // for (i = 0; i <= formsList.length; i++) {
    //     let localVal = formsList[i];
    //     console.log(localVal.value);
    //     // formsList[i].value = "";
    // }
}
document.getElementById('submit-item').style.backgroundColor = "red";
document.getElementById('submit-item').addEventListener('click', () => populate());
