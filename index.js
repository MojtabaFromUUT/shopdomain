let datas = []
fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(d=>datas.push(d));
    
let a = document.createElement('div')
let nod = document.createElement('li');
