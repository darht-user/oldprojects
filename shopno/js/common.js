$(document).ready(function(){
    $(".a-slider").slick({
        dots    : true,
        // infinite: true,
        // speed   : 500,
        // fade    : true,
        // cssEase : 'linear',
        arrows  : false,
        asNavFor: ".quotes"
    });
    $(".a-a-slider").slick({
        dots: true,
        arrows: false
    });
    $(".quotes").slick({
        // dots    : false,
        // infinite: true,
        // speed   : 500,
        // fade    : true,
        // cssEase : 'linear',
        // asNavFor: ".a-slider"
        // //arrows: false
        asNavFor: ".a-slider"
    });  

    $('.hidden a').click(function(){
        $('.hidden').fadeOut(500);    
    });

    $('.nav nav').click(function(){
        $('.hidden').fadeIn(500);
    });

    $('.hidden .close').click(function(){
        $('.hidden').hide();
    });


    $('.work').click(function(){
        var url = $(this).css('backgroundImage').replace('url(','').replace(')','').replace(/\"/gi, "");
        $(this).magnificPopup({ 
            items: {
                src: url
            },
            type: 'image'
        });
    });


    $('.btn-more').click(function(){
        $('.services').each(function(){
            if(!($(this).children('.after-click').css('display')=='none')) {
                $(this).children('.after-click').hide();
                $(this).children(".services-text").fadeIn(400);

            }
        });
        $(this).parent().parent().children(".after-click").fadeIn(400);
        $(this).parent().hide();
    });

    $('.close').click(function(){
        $(this).parent().parent().children(".services-text").fadeIn(400);
        $(this).parent().hide();
    });
});