let root = document.querySelector('.root');
let select = document.querySelector('.select');
let url = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=30';

function display(data){
  data.forEach(element => {
    let li = document.createElement('li');
    li.classList.add('list');
    let img = document.createElement('img');
    img.classList.add('photo');
    img.src = element.imageUrl;
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.innerText = element.newsSite;
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
}

function displayoption(sources){
  sources.forEach((source) => {
    let option = document.createElement('option');
    option.innerText = source;
    option.value = source;
    select.append(option);
  });
}

fetch(url)
.then((res) => res.json())
.then((data) => {
  allData = data
  display(allData);
  let allSoures = new Set(data.map((n) => n.newsSite));
  displayoption(Array.from(allSoures));
});


select.addEventListener('change', (event) => {
  let soure = event.target.value;
  let allnews = allData.filter(news => news.newsSite === soure);
  display(allnews);
})
