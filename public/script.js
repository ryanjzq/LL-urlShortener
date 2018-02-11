alert('Welcome to Super Duper Useless Shortening Service');

document.getElementById('submitURL').onclick = (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open('POST', '/api/getshortened');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';

    xhr.onload = function() {
        alert(xhr.response);
    };

    var info = JSON.stringify({inputUrl: document.getElementById("inputURL").value}); 
    xhr.send(info);
}

document.getElementById('submitHash').onclick = (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    //let requestString =  '/api/geturl/' + document.getElementById("inputHash").value

    xhr.open('GET', '/api/geturl');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = 'json';

    xhr.onload = function() {
        alert(xhr.response);
    };

    var info = JSON.stringify({inputHash: document.getElementById("inputHash").value}); 
    xhr.send(info);
}