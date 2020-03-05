$(document).ready(function () {

// ------------ PAGE UP BUTTON ------------

    $(document).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.go-top-button').fadeIn();
        } else
            $('.go-top-button').fadeOut();
    });


// ------------ SOFT SCROLL ------------

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
