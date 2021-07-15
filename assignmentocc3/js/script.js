$(document).ready(function(){
$('.next').on('click',function(){
    var currentimg=$('.active');
    var nextimg=currentimg.next();
    if(nextimg.length){
        currentimg.removeClass('active').css('z-index',-10);
        nextimg.addClass('active').css('z-index',10);
    }
});

$('.prev').on('click',function(){
    var currentimg=$('.active');
    var previmg=currentimg.prev();
    if(previmg.length){
        currentimg.removeClass('active').css('z-index',-10);
        previmg.addClass('active').css('z-index',10);
    }

});

});