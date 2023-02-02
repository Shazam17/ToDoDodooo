const requestURL = "https://dummyjson.com/products";

function request() {
    let dataBase = sendRequest('GET', requestURL);

    dataBase.then(data => {
        console.log(data.products[0].title)
        const title = [];
        for(let i = 0;i<10;i++){
            title[i] = data.products[i].title; 
            console.log(data.products[i].title);
        }
        startAddListItem(title);
        dataBase.catch(err => console.log(err))
    })
}
request();

function addRequest() {
    let dataBase = sendRequest('GET', requestURL);
    let Quantity = document.getElementById('Quant').value;
    if(Quantity>30) {alert("Let me number lower than 30")}
    else{
    dataBase.then(data => {
        console.log(data.products[0].title)
        const title = [];
        for(let i = 0;i<Quantity;i++){
            title[i] = data.products[i].title; 
            console.log(data.products[i].title);
        }
        addListItem(title,Quantity);
        dataBase.catch(err => console.log(err))
    })}
}

function addRequestDescription(n) {
    let dataBase = sendRequest('GET', requestURL);
    let Quantity = document.getElementById('Quant').value;
    dataBase.then(data => {
        console.log(data.products[0].title)
        const id = [];
        const title = [];
        const description = [];
        const price = [];
        const discountPercentage = [];
        const rating = [];
        const stock = [];
        const brand = [];
        const category = [];
        const images = [];n
            id[n] = data.products[n].id;
            title[n] = data.products[n].title; 
            description[n] = data.products[n].description;
            price[n] = data.products[n].price;
            discountPercentage[n] = data.products[n].discountPercentage;
            rating[n] = data.products[n].rating;
            stock[n] = data.products[n].stock;
            brand[n] = data.products[n].brand;
            category[n] = data.products[n].category;
            images[n] = data.products[n].images;
            console.log(images[n][1]);
                
        let removeDiv = document.querySelectorAll(".listObjectDescription");
        for (let k = removeDiv.length; k>0;k--) {
            removeDiv[k-1].remove();
        }
        
            let targetDiv = document.querySelector(".mainContainer");
            let newDiv = document.createElement("div");
            newDiv.className = 'listObjectDescription';
            newDiv.id = 'Description';
            newDiv.innerHTML = ' <img src="'+images[n][0]+'" id="big"> <div id="thumbs"> <a href="'+images[n][0]+'"> <img src="'+images[n][0]+'"> </a> <a href="'+images[n][1]+'"> <img src="'+images[n][1]+'"> </a> <a href="'+images[n][2]+'"> <img src="'+images[n][2]+'"> <a href="'+images[n][3]+'"> <img src="'+images[n][3]+'"> <a href="'+images[n][4]+'"> <img src="'+images[n][4]+'"> </a> </div> <div class="mainDescriptionInfo"> <div class="" id="">id: '+id[n]+'</div> <div class="" id="">title: '+title[n]+'</div> <div class="" id="">description: "'+description[n]+'"</div> <div class="" id="">price: '+price[n]+'</div> <div class="" id="">discountPercentage: '+discountPercentage[n]+'</div> <div class="" id="">rating: '+rating[n]+'</div> <div class="" id="">stock: '+stock[n]+'</div> <div class="" id="">brand: "'+brand[n]+'"</div> <div class="" id="">category: "'+category[n]+'"</div> </div>';
            targetDiv.append(newDiv);
            
            changeItem(n+1);

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
    document.getElementById('Description').style.gridArea = h + 2 + '/2/' + (h + 11) + '/3';
    
}

function rechangeItem() {
    document.getElementById('Description').style.backgroundColor = "white";
    document.getElementById('Description').style.gridArea = '3/2/12/3';
}

function startAddListItem(title) {
    removeListItems();
    for (let j = 0; j < 10; j++) {
        let targetDiv = document.querySelector(".list");
        let newDiv = document.createElement("div");
        newDiv.className = 'listObject';
        newDiv.onmouseover = () => addRequestDescription(j);
        // newDiv.onmouseout = () => rechangeItem(j + 1);
        newDiv.draggable = 'true';
        newDiv.innerHTML = '<a>'+title[j]+'</a>';
        targetDiv.append(newDiv);
    }
}

function addListItem(title,Quantity) {
    removeListItems();
    for (let i = 0; i < Quantity; i++) {
        let targetDiv = document.querySelector(".list");
        let newDiv = document.createElement("div");
        newDiv.className = 'listObject';
        newDiv.onmouseover = () => addRequestDescription(i);


        // newDiv.onmouseout = () => rechangeItem(i + 1);
        newDiv.draggable = 'true';
        newDiv.innerHTML = '<a>'+title[i]+'</a>';
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

var thumbs = document.querySelectorAll('#thumbs > a');
var big = document.getElementById('big');

for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function(e) {
        e.preventDefault();
        big.src = this.href;
    });
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