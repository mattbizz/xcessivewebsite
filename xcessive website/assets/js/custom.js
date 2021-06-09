$(document).ready(function(){
    document.documentElement.classList.remove("no-js");
    $('.sidenav').sidenav({edge: 'right'});
    $(window).scroll(function() {
        if($(this).scrollTop() > 450) {
            $("#main-nav").removeClass("transparent");
        } else {
            $("#main-nav").addClass("transparent");
        }
    });
});