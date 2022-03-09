let url = 'https://www.anapioficeandfire.com/api/books';
let root = document.querySelector('.root');
let model = document.querySelector('.model');

function displayUI(data){
  data.forEach(user => {
    let li = document.createElement('li');
    li.classList.add('list');
    let div = document.createElement('div');
    div.classList.add('list1');
    let h2 = document.createElement('h2');
    h2.innerText = user.name;
    let p = document.createElement('p');
    p.innerText = user.authors;
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = `show Characters ${user.characters.length}`;
    button.addEventListener('click', () => {
      characters(user.characters);
    });
    div.append(h2,p,button);
    li.append(div);
    root.append(li);
  });
}

function characters(name){
  name.forEach(chara => {
    let h3 = document.createElement('h3');
    let a = document.createElement('a');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.classList.add('ch');
    li.innerText = chara;
    console.log(chara);
    ul.append(li);
    model.append(h3,a,ul);
  })  
}


let books = fetch(url)
.then((res) => res.json())
.then((data) =>{
  displayUI(data);
}).catch(console.error());
