jQuery(document).ready(function($) {
    $('.carouselMain').carousel();

    $(".scroll").click(function(event){		
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });

    new WOW().init();

});