var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=9vmEnzBVp3VEDevM4bOGZ2WB5mw5Mnbq');

request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

    var orgianlUrl = parsedData.data.images.original.url;
    console.log(orgianlUrl);

    var gif = document.createElement('img');
    gif.setAttribute('src', orgianlUrl);
    document.body.appendChild(gif);
}

request.send();