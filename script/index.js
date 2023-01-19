const requestURL = "https://dummyjson.com/products";


let dataBase = sendRequest('GET', requestURL);
dataBase.then(data => console.log(data.products[0].title))
dataBase.catch(err => console.log(err))

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json()
    })
}



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





function changeItem(h) {
    document.getElementById('1').style.backgroundColor = "rgba(102, 51, 153, 0.297)";
    document.getElementById('1').style.gridArea = h + 2 + '/2/' + (h + 5) + '/3';
}

function rechangeItem() {
    document.getElementById('1').style.backgroundColor = "white";
    document.getElementById('1').style.gridArea = '3/2/6/3';
}

function adder() {
    console.log(document.getElementById('Quant'));
    let Quantity = document.getElementById('Quant').value;
    for(let i = Quantity; i>0; i-- ){
        let targetDiv = document.querySelector(".list");
        console.log(targetDiv);

        let newDiv = document.createElement("div");
        newDiv.className = 'listObject';
        newDiv.onmouseover = changeItem(i);
        newDiv.onmouseout = rechangeItem(i);
        newDiv.innerHTML = '<a>New link</a>';
        targetDiv.append(newDiv);
        console.log(targetDiv);
    }
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





