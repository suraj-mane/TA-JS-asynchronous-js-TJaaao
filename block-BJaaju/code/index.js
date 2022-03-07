let url = 'https://api.unsplash.com/photos/?client_id=eWkskmdZTs4-Y0ng_pTZunhlKTDF8QKWfxbrqbwiAqo';

let searchurl = (query) =>  `https://api.unsplash.com/search/photos?${query}=office&client_id=eWkskmdZTs4-Y0ng_pTZunhlKTDF8QKWfxbrqbwiAqo`;

let root = document.querySelector('.root');
let searchroot = document.querySelector('.searchele')

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));

  xhr.onerror = function() {
    console.log('Something went worng!');
  }
  xhr.send();
}

function display(images) {
  root.innerHTML = "";
  images.forEach(image => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = image.urls.thumb;
    li.append(img);
    root.append(li);
  });
}

fetch(url, display);

function handlsearch(){
  if(event.keyCode === 13 && searchroot.value){
    fetch(searchurl(searchroot.value, (searchResult) => {
      display(searchResult.results);
    }))
  }
}

searchroot.addEventListener('keyup', handlsearch);