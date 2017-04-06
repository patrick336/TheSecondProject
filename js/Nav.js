$(window).scroll(function () {
    if (window.scrollY < 50 && window.innerWidth > 778) {
        $('.navigation').css({'background': 'transparent'});
        return;
    }
    else {
        $('.navigation').css({'background': '#3498db'});
    }
}); //scroll
