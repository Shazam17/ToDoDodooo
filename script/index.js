const requestURL = "https://dummyjson.com/products";

function request() {
    let dataBase = sendRequest('GET', requestURL);
    dataBase.then(data => {
        console.log(data.products[0].title)



        dataBase.catch(err => console.log(err))
    })
}


function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json()
    })
}

function changeItem(h) {
    document.getElementById('Description').style.backgroundColor = "rgba(102, 51, 153, 0.297)";
    document.getElementById('Description').style.gridArea = h + 2 + '/2/' + (h + 5) + '/3';
}

function rechangeItem() {
    document.getElementById('Description').style.backgroundColor = "white";
    document.getElementById('Description').style.gridArea = '3/2/6/3';
}

function startAddListItem() {
    removeListItems();
    for (let j = 0; j < 10; j++) {
        let targetDiv = document.querySelector(".list");
        let newDiv = document.createElement("div");
        newDiv.className = 'listObject';
        newDiv.onmouseover = () => changeItem(j + 1);
        newDiv.onmouseout = () => rechangeItem(j + 1);
        newDiv.draggable = 'true';
        newDiv.innerHTML = '<a>New link</a>';
        targetDiv.append(newDiv);
    }
}
startAddListItem();

function addListItem() {
    removeListItems();
    let Quantity = document.getElementById('Quant').value;
    for (let i = 0; i < Quantity; i++) {
        let targetDiv = document.querySelector(".list");
        let newDiv = document.createElement("div");
        newDiv.className = 'listObject';
        newDiv.onmouseover = () => changeItem(i + 1);
        newDiv.onmouseout = () => rechangeItem(i + 1);
        newDiv.draggable = 'true';
        newDiv.innerHTML = '<a>New link</a>';
        targetDiv.append(newDiv);
    }
}

function removeListItems() {
    const removeItems = document.querySelectorAll(".listObject");
    for (let k = removeItems.length; k>0;k--) {        
        console.log(removeItems[k]);
        removeItems[k-1].remove();
      }
}

//Создаем подвижность наших объектов

const listObjects = document.querySelectorAll('.listObject');
const list = document.querySelectorAll('.list');

console.log(listObjects, list, "1");

listObjects.forEach((listObject) => {
    listObject.addEventListener("dragstart", handlerDragstart);
    listObject.addEventListener("dragend", handlerDragend);
    listObject.addEventListener('drag', handlerDrag);
});

function handlerDragstart(event) {
    console.log("dragstart", this);
    this.classList.add("listObject--active");
}
function handlerDragend(event) {
    console.log("dragend", this);
    this.classList.remove("listObject--active");
}
function handlerDrag(event) {

}














// function upper(e) {
//     console.log(e);
//     const a = e.parentElement.previousSibling;
//     const b = e.parentElement;
//     const parent = document.querySelector('.origin')
//     console.log('qwerty');
//     console.log(e.parentElement);
//     console.log(b);
//     parent.insertBefore(b, a)
// }
// function downer(e) {
//     const a = e.parentElement;
//     const b = e.parentElement.nextSibling;
//     const parent = document.querySelector('.origin')
//     parent.insertBefore(b, a)
// }
// function remover(e) {
//     const remm = e.parentElement;
//     remm.remove();
// }






// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

// const ul = document.getElementById('authors');
// const url = 'https://randomuser.me/api/?results=10';

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let authors = data.results;
//   return authors.map(function(author) {
//     let li = createNode('li');
//     let img = createNode('img');
//     let span = createNode('span');
//     img.src = author.picture.medium;
//     span.innerHTML = `${author.name.first} ${author.name.last}`;
//     append(li, img);
//     append(li, span);
//     append(ul, li);
//   })
// })
// .catch(function(error) {
//   console.log(error);
// });