

var menutoggle = document.querySelector('.toggle');
var navtoggle = document.querySelector('.navigation');
    menutoggle.onclick = function(){
        menutoggle.classList.toggle('active');
        navtoggle.classList.toggle('active');
    }