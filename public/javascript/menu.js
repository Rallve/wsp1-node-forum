const collapse = document.querySelector('.navbar__collapse');
const button = document.querySelector('.navbar__button');
const RGB = document.getElementsByClassName("RGB");
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var i = 1;

window.setInterval(function(){
    //bar.style.backgroundColor = colors[i];
    for(var j = 0; j < RGB.length; j++){
        RGB[j].style.color = colors[i];
    }
    i++;
    if (i === colors.length){
        i = 0;
    }
}, 300);

button.addEventListener('click', function(event) {
    const menu = document.querySelector('.navbar__collapse');
    menu.classList.toggle('navbar__collapse--show');
});

const mql = window.matchMedia('(max-width: 599px)');

mql.addEventListener('change', (e) => {
    if (!e.matches && collapse.classList[1] == 'navbar__collapse--show') {
        collapse.classList.toggle('navbar__collapse--show');
    }
});