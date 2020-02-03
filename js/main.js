const loader=document.querySelector('.loader');
const main =document.querySelector('.main');

function init(){
    setTimeout(() => {
        loader.style.opacity=0;
        loader.style.display='none';

        main.style.display='flex';

        setTimeout(() => (main.style.opacity=1),50 );
    }, 5500);
}
init();

$(document).ready(function(){
    $('#fullpage').fullpage({
        scrollingSpeed:1200,
        autoScrolling:true
	
    });
});