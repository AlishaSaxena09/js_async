let url = 'https://api.unsplash.com/photos/random/?client_id=3YIZkIG7QHmaUaN6iPQn5vzSCnXvkxqDmgj2_7EJUiw';
let xhr = new XMLHttpRequest();
let button = document.createElement('button');
button.textContent = "Next";
let root = document.querySelector('#root');

function fetchData(){
    xhr.open('GET', url);
    xhr.onload = function(){
        root.innerHTML = '';
        let dataJSON = JSON.parse(xhr.response);
        let h2 = document.createElement('h2');
        h2.textContent = "Random Images";
        let div = document.createElement('div');
        div.className = "image-container";
        let img = document.createElement('img');
        img.src = dataJSON.urls.small;
        div.append(img);
    
        root.append(h2, div, button);
    } 

    xhr.onerror = function() {
        console.log ("Error !");
    }
    
    xhr.send();
}

button.addEventListener('click', fetchData);
fetchData();




// let url = 'https://api.unsplash.com/'