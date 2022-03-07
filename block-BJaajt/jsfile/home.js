let input = document.querySelector('input');
let displayuser = document.querySelector('.displayuser');
let img = document.querySelector('img');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');
let follower = document.querySelector('.follower');
let following = document.querySelector('.following');
console.log(p);

function displayUI(data){
  img.src = data.avatar_url;
  h3.innerText = data.name;
  p.innerText = data.company;
  follower.src = data.followers_url;
  following.src = data.following_url;
}

function getValue(event){
  if(event.keyCode === 13){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${event.target.value}`);
    xhr.onload = function (){
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    }
    xhr.onerror = function () {
      console.log('Something went wrong....');
    }
    xhr.send();
    event.target.value = '';
  } 
}

input.addEventListener('keyup', getValue);

let btn = document.querySelector('button');
let cat = document.querySelector('.cat');
function displaycat(data){
  var c = data[0];
  cat.src = c.url;
}

function nextImg() {
  let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.thecatapi.com/v1/images/search`);
    xhr.onload = function (){
      let cat = JSON.parse(xhr.response);
      displaycat(cat);
    }
    xhr.onerror = function () {
      console.log('Something went wrong....');
    }  
  xhr.send();  
}

btn.addEventListener('click', nextImg);