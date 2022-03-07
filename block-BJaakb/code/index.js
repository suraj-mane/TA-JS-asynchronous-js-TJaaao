let url = 'https://api.unsplash.com/photos/?client_id=eWkskmdZTs4-Y0ng_pTZunhlKTDF8QKWfxbrqbwiAqo';
let root = document.querySelector('.root');

function displayUI(url) {
  return new Promise((resolve, reject) => { 
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url) ;
  xhr.onload = () => setTimeout(resolve(photo = JSON.parse(xhr.response), show(photo), 5000));
  xhr.onerror = () => reject('something wrong in..');
  xhr.send();
});
}

displayUI(url);

function show(data){
  data.forEach(ele => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = ele.urls.small;
    li.append(img);
    root.append(li);
  });
}