var lis = document.querySelectorAll('.carousel li');
var elNext = document.querySelector('.next');
var elPrev = document.querySelector('.prev');
var i = 0;
var memo = lis[i];
var dots = document.querySelectorAll('.dots li');

elNext.addEventListener('click', function() {
    if (i < 4) {
        lis[i].classList.remove('visible');
        i++;
        lis[i].classList.add('visible');
        dotsclear();
        dots[i].classList.add('active');
    }             
    else {
        lis[i].classList.remove('visible');
        i = 0;
        lis[i].classList.add('visible');
        dotsclear();
        dots[i].classList.add('active');  
    }
});
elPrev.addEventListener('click', function() {
    if (i > 0) {
        lis[i].classList.remove('visible');
        i--;
        lis[i].classList.add('visible');
        dotsclear();
        dots[i].classList.add('active');
    }             
    else {
        lis[i].classList.remove('visible');
        i = 4;
        lis[i].classList.add('visible');
        dotsclear();
        dots[i].classList.add('active');
    }
});

function dotsclear() {
    for (let c = 0; c < dots.length; c++) {
        dots[c].classList.remove('active');
    }
}

for (let e = 0; e < dots.length; e++) {
    dots[e].addEventListener('click', function () {
        lis[i].classList.remove('visible');
        i = e;
        lis[i].classList.add('visible');
        dotsclear();
        dots[i].classList.add('active');
    })
}
