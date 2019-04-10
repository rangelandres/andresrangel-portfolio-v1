//transition bewtween pages Freestyle to Infographic
$(document).ready(function(){
    $("#f2i").click(function(){
        $('.freestyle').hide();

        $(".infographic").load("./infographic.html");
        $('.infographic').show();
        
        $('.infographic').addClass('-expand');

     
    }); 
})