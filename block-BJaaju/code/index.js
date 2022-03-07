let img = document.querySelector('img');
let btn = document.querySelector('.btn');

function getDisplay() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.unsplash.com/search/photos?clinet_id=eWkskmdZTs4-Y0ng_pTZunhlKTDF8QKWfxbrqbwiAqo&query=flower');
  xhr.onload = function () {
    let data = JSON.parse(xhr.response);
    console.log(data);
  }
  xhr.send();
}

btn.addEventListener('click', getDisplay);