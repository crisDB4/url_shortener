const form = document.querySelector('#form');
const input = document.querySelector('#url');
const btn = document.querySelector('#btnMakeShort');
const pResult = document.querySelector('#result');

const API = 'https://gotiny.cc/api'

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: "POST",
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "input": "url"
}

function getUrl(event){
    event.preventDefault();
    data.input = input.value;
    console.log(data.input)
    postData(`${API}`,data)
        .then(response => response.json())
        .then( data => pResult.innerText= `gotiny.cc/${data}`);
    
}

btn.addEventListener('click', function (event){
    event.preventDefault();
    data.input = input.value;
    console.log(data.input)
    postData(`${API}`,data)
        .then(response => response.json())
        .then( data => pResult.innerText = `gotiny.cc/${data[0].code}`);
    
});