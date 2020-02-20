let menuIcon = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');
let body = document.querySelector('body');

menuIcon.addEventListener('click', function () {
    console.log('hi');
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
    body.classList.toggle('lock')
});

function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    };
}

ibg();