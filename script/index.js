const requestURL = "https://dummyjson.com/products";
//Счетчик объектов
var parent = document.getElementsByClassName("list")[0];
parent.onmouseover = function (e) {
    var e = e || event;
    var target = e.target || e.srcElement;
    for(var i = 0; i < parent.children.length; i++) {
        if(parent.children[i] == target) return console.log(i);
        changeItem(i);
    }
}

function request() {
    let dataBase = sendRequest('GET', requestURL);

    dataBase.then(data => {
        console.log(data.products[0].title)
        const title = [];
        for (let i = 0; i < 10; i++) {
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
    if (Quantity > 30) { alert("Let me number lower than 30") }
    else {
        dataBase.then(data => {
            console.log(data.products[0].title)
            const title = [];
            for (let i = 0; i < Quantity; i++) {
                title[i] = data.products[i].title;
                console.log(data.products[i].title);
            }
            addListItem(title, Quantity);
            dataBase.catch(err => console.log(err))
        })
    }
}

function addRequestDescription(n) {
    let dataBase = sendRequest('GET', requestURL);
    let Quantity = document.getElementById('Quant').value;
    dataBase.then(data => {
        console.log(data.products[0].title);
        const id = [];
        const title = [];
        const description = [];
        const price = [];
        const discountPercentage = [];
        const rating = [];
        const stock = [];
        const brand = [];
        const category = [];
        const images = [];
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

        // Легкий вариант спрятать пустой элемент
        for (let i = 0; i < 5; i++) {
            if (images[n][i] == undefined) { images[n][i] = images[n][0]; }
        }

        let removeDiv = document.querySelectorAll(".listObjectDescription");
        for (let k = removeDiv.length; k > 0; k--) {
            removeDiv[k - 1].remove();
        }
        let targetDiv = document.querySelector(".mainContainer");
        let newDiv = document.createElement("div");
        newDiv.className = 'listObjectDescription';
        newDiv.id = 'Description';
        newDiv.innerHTML = ' <button id = "x" onclick = removeDescriptionX()>x</button> <img src="' + images[n][0] + '" id="big"> <div id="thumbs"> <a href="' + images[n][0] + '"> <img src="' + images[n][0] + '"> </a> <a href="' + images[n][1] + '"> <img src="' + images[n][1] + '"> </a> <a href="' + images[n][2] + '"> <img src="' + images[n][2] + '"> <a href="' + images[n][3] + '"> <img src="' + images[n][3] + '"> <a href="' + images[n][4] + '"> <img src="' + images[n][4] + '"> </a> </div> <div class="mainDescriptionInfo"><div>id: ' + id[n] + '</div> <div>title: ' + title[n] + '</div> <div>description: "' + description[n] + '"</div> <div>price: ' + price[n] + '</div> <div>discountPercentage: ' + discountPercentage[n] + '</div> <div>rating: ' + rating[n] + '</div> <div>stock: ' + stock[n] + '</div> <div>brand: "' + brand[n] + '"</div> <div>category: "' + category[n] + '"</div> </div>';
        targetDiv.append(newDiv);

        changeObject(n,newDiv);

        imgChanging();

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

function changeObject(n,description){
    let object = document.getElementById(n);
        description.addEventListener('mouseover', function() {
        object.style.backgroundColor = "rgba(102, 51, 153, 0.297)";});
        description.addEventListener('mouseout', function() {
        object.style.backgroundColor = "";});
        document.getElementById('x').addEventListener('click', function() {
        object.style.backgroundColor = "";});
        
}

function startAddListItem(title) {
    removeListItems();
    for (let j = 0; j < 10; j++) {
        let targetDiv = document.querySelector(".list");
        let newDiv = document.createElement("div");
        newDiv.className = 'listObject';
        newDiv.id = j;
        newDiv.onmouseover = () => addRequestDescription(j);
        newDiv.draggable = 'true';
        newDiv.innerHTML = '<a>' + title[j] + '</a>';
        targetDiv.append(newDiv);
    }
}

function addListItem(title, Quantity) {
    removeListItems();
    for (let i = 0; i < Quantity; i++) {
        let targetDiv = document.querySelector(".list");
        let newDiv = document.createElement("div");
        newDiv.className = 'listObject';
        newDiv.id = i;
        newDiv.onmouseover = () => addRequestDescription(i);


        // newDiv.onmouseout = () => rechangeItem(i + 1);
        newDiv.draggable = 'true';
        newDiv.innerHTML = '<a>' + title[i] + '</a>';
        targetDiv.append(newDiv);
    }
}

function removeListItems() {
    const removeItems = document.querySelectorAll(".listObject");
    const removeDescription = document.querySelector(".listObjectDescription");
    for (let k = removeItems.length; k > 0; k--) {
        removeItems[k - 1].remove();
    }
    if (removeDescription == null) { }
    else {
        removeDescription.remove();
    }
}

function removeDescriptionX(){
    const removeDescription = document.querySelector(".listObjectDescription");
    if (removeDescription == null) { }
    else {
        removeDescription.remove();
    }
}

function imgChanging(){
    var thumbs = document.querySelectorAll('#thumbs > a');
    var big = document.getElementById('big');
    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener('mouseover', function(e) {
            e.preventDefault();
            big.src = this.href;
        });}
}
//Создаем подвижность наших объектов

const listObjects = document.querySelectorAll('.listObject');
const list = document.querySelectorAll('.list');



function dragAndDrop(){
const tasksListElement = document.querySelector(`.list`);
const taskElements = tasksListElement.querySelectorAll(`.listObject`);

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

const getNextElement = (cursorPosition, currentElement) => {
  const currentElementCoord = currentElement.getBoundingClientRect();
  const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;
  
  const nextElement = (cursorPosition < currentElementCenter) ?
    currentElement :
    currentElement.nextElementSibling;
  
  return nextElement;
};

tasksListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  
  const activeElement = tasksListElement.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`listObject`);
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = getNextElement(evt.clientY, currentElement);
  if (nextElement && activeElement === nextElement.previousElementSibling || activeElement === nextElement) {return;}
    console.log(activeElement.id,nextElement.id);

	tasksListElement.insertBefore(activeElement, nextElement);
});
}
dragAndDrop();






//sort 