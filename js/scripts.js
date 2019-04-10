console.log('Scripts for Index');


//Transitions transition after load.
$(window).load(function() {
  $("body").removeClass("preload");
});


var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}


preload(
    "imgs/proto-1.png",
    "imgs/proto-2.png",
    "imgs/proto-3.png",
    "imgs/proto-4.png"

)


//Function loads cpu.html page
 $(function(){
      $("#cpu").load("/cpu.html"); 
    });

//Function loads print.html page
$(function(){
      $("#print").load("/print.html"); 
    });



//transition bewtween pages HOME TO PORTFOLIO
$(document).ready(function(){

    // to fade in on page load
    // to fade out before redirect
    $('#transition-portfolio').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();

        $('header').addClass('-collapse');

        $('.hero-text').animate({height: '100vh'}, 300);
        $('.hero-icons').animate({height: '0'}, 300);
        
        $("body").css("overflow-y","scroll");
        $(".icon-container").css("display","none");
        $(".icon").css("display","none");
        $("#cpu").css("display","none");
        
        $('.hero-icons').delay(200).queue(function(next){$(this).css('display', 'none').dequeue();});

        if ($(window).width() >= 600){	
            $('.side-nav').css('opacity', 1);
            $('.side-nav').delay(300).animate({width: '25%'}, 300);
            }
        
        $('.hero-text-container').animate({opacity: '0'}, 300);
        

        $('footer').fadeOut(750, function(){document.location.href = redirect});
    });
});



$(function () {
    count = 0;
    wordsArray = ["LOW-FIDELITY", "MID-FIDELITY", "PROTOTYPE-I", "PROTOTYPE-II"];
    
    imgsArray = ["imgs/proto-1.png", "imgs/proto-2.png", "imgs/proto-3.png", "imgs/proto-4.png"]
        
    
    setInterval(function () {
        count++;
        $("#proto-title").fadeOut(500, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
        });
        
        $("#prototype-s").fadeOut(500, function () {
            $(this).attr("src", imgsArray[count % imgsArray.length]).fadeIn(500);

        });
        
    }, 7000);
});


//transition bewtween pages HOME TO CONTACT
$(document).ready(function(){

    // to fade in on page load


    // to fade out before redirect
    $('#transition-contact').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();

        $('header').addClass('-collapse');

        $('.hero-text').animate({height: '100vh'}, 300);
        $('.hero-icons').animate({height: '0'}, 300);
        
        $("body").css("overflow-y","scroll");
        $(".icon-container").css("display","none");
        $(".icon").css("display","none");
        $("#cpu").css("display","none");
        
        $('.hero-icons').delay(200).queue(function(next){$(this).css('display', 'none').dequeue();});

 
        $('.hero-text-container').animate({opacity: '0'}, 300);
    $('.content-frame').fadeIn();


        $('footer').fadeOut(750, function(){document.location.href = redirect});
    });
});







console.log('This is a form');
//animates form entry and submits via AJAX and PHP
$(function(){
    
    $('.aForm').on('submit',function(e){
        e.preventDefault();
        
        $(".aForm").addClass('-expand');
        $(".name").addClass('-expand');
        $(".email").addClass('-expand');
        $(".textarea").addClass('-expand');
        $("#enter").addClass('-expand');
        $(".content-header").addClass('-expand');
        $(".success").addClass('-expand');
        $("#box").addClass('-expand');
        $("#new").addClass('-expand');
        $(".text").addClass('-expand');

        $.ajax({
            type: 'post',
            url: '../php/newEmail.php',
            data: $('.aForm').serialize(),
            success: function () {
            }
        });
        $document.getElementById(".aForm").reset();
        
    });

});




//this function runs every time you are scrolling
//detects if .next is in view
// freestyle.html

$(window).scroll(function() {
    var top_of_element = $(".next-project").offset().top;
    var bottom_of_element = $(".next-project").offset().top + $(".next-project").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        $('.next-circle').addClass('-expand');
        $('.next').addClass('-expand');
    }
    else {
        $('.next-circle').removeClass('-expand');
        $('.next').removeClass('-expand');

    }
});




$(document).ready(function(){
    $("#freestyle").click(function(){
        $('.infographic').hide();
        $('.intro').hide();

        $('.freestyle').addClass('-expand');
        
        $('.content-frame').addClass('-expand');
        $('.sidenav-frame').addClass('-expand');

        $('.sidenav-frame').removeClass('-open');
        $('.content-frame').removeClass('-open');

        $("#bars").css("display","flex");

        $(".content-frame").css("transition"," all .5s ease-out");
        $(".sidenav-frame").css("transition"," all .5s ease-out");
        
        $(".freestyle").load("./freestyle.html");
        $('.freestyle').show();

    }); 
})

$(document).ready(function(){
    $("#infographic").click(function(){
        $('.freestyle').hide();
        $('.intro').hide();


        $(".infographic").load("./infographic.html");
        $('.infographic').show();

        $('.infographic').addClass('-expand');
        
        $('.content-frame').addClass('-expand');
        $('.sidenav-frame').addClass('-expand');

        $('.sidenav-frame').removeClass('-open');
        $('.content-frame').removeClass('-open');

        $("#bars").css("display","flex");

        $(".content-frame").css("transition"," all .5s ease-out");
        $(".sidenav-frame").css("transition"," all .5s ease-out");
    }); 
});



console.log('This is a sidenav');

//opens subtabs
$(document).on('touchstart', function() {
    detectTap = true; //detects all touch events
});
$(document).on('touchmove', function() {
    detectTap = false; //Excludes the scroll events from touch events
});


$(document).on('click', '#design', function(){
        var click = $(this).data('clicks');

        $('.designmenu').addClass('-expand');


});


//opens sidenav

$(document).on('click', '#close', function(){
    console.log('close');
    $('.content-frame').addClass('-expand');
    $('.sidenav-frame').addClass('-expand');
    
    $('.sidenav-frame').removeClass('-open');
    $('.content-frame').removeClass('-open');

    $("#bars").css("display","flex");

    $(".content-frame").css("transition"," all .5s ease-out");
    $(".sidenav-frame").css("transition"," all .5s ease-out");
        $('.designmenu').removeClass('-expand');

});

$(document).on('click', '#bars', function(){
    var click = $(this).data('clicks');
    console.log('open');
    
    $('.sidenav-frame').addClass('-open');
    $('.content-frame').addClass('-open');

    $("#bars").css("display","none");
    
    $('.content-frame').removeClass('-expand');
    $('.sidenav-frame').removeClass('-expand');
    
    $(".sidenav-frame").css("transition"," all .5s ease-out");
    $(".content-frame").css("transition"," all .5s ease-out");
    
});
