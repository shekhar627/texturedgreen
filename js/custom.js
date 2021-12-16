$(document).ready(function(){
    $('#custom-nav-bars').on('click',function(){
        $('.responsive-menu').toggle('slow','swing',function(){
           if($('.responsive-menu').is(':visible')===true){
            var element = $('.menu');
            element.css('background-color','black');
            element.css('color','lime');
           }
           else{
            var element = $('.menu');
            element.css('background-color','#777');
           }
        });
    });
});