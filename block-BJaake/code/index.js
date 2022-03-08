let root = document.querySelector('.root');

function fetch(url){
  return new Promise((resovle, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resovle(JSON.parse(xhr.response));
    xhr.onerror = () => reject('check Your internet connection');
    xhr.send();
  })
}

let display = fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=30')
.then((data) => {
  data.forEach(element => {
    let li = document.createElement('li');
    li.classList.add('list');
    let img = document.createElement('img');
    img.classList.add('photo');
    img.src = element.imageUrl;
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.innerText = element.title;
    let p = document.createElement('p');
    p.classList.add('text');
    p.innerText = element.summary;
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = "More"
    div.append(h2,p,button);
    li.append(img,div);
    root.append(li);
  });
}).catch(console.log)
.finally("data is load");
