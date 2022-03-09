let url = 'https://sleepy-falls-37563.herokuapp.com/api/todo';

fetch(url)
.then((res) => res.json())
.then(console.log);

//not access url;