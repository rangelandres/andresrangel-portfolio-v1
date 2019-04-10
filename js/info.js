//this function runs every time you are scrolling
//detects if .next2 is in view
// error404.html


$(window).scroll(function() {
    var top_of_element = $(".next-project2").offset().top;
    var bottom_of_element = $(".next-project2").offset().top + $(".next-project2").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        $('.next-circle2').addClass('-expand');
        $('.next2').addClass('-expand');
    }
    else {
        $('.next-circle2').removeClass('-expand');
        $('.next2').removeClass('-expand');

    }
});