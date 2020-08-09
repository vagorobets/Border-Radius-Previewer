let tl = document.querySelector('.input-tl');
let tr = document.querySelector('.input-tr');
let bl = document.querySelector('.input-bl');
let br = document.querySelector('.input-br');
let button = document.querySelector('#result');
let square = document.querySelector('#square');
let textarea = document.querySelector('#textarea');

tl.addEventListener('input', function(){    
    square.style.borderTopLeftRadius = tl.value + 'px';
})

tr.addEventListener('input', function(){
    square.style.borderTopRightRadius = tr.value + 'px';
})

bl.addEventListener('input', function(){
    square.style.borderBottomLeftRadius = bl.value + 'px';
})

br.addEventListener('input', function(){
    square.style.borderBottomRightRadius = br.value + 'px';
})

button.addEventListener('click', function(){
    textarea.innerHTML = 'border-radius: ' + square.style.borderTopLeftRadius + ' ' + square.style.borderTopRightRadius + ' ' + square.style.borderBottomLeftRadius + ' ' + square.style.borderBottomRightRadius + ';';
})

