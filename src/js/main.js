var $section_active="home";
var $counter = 0;
var mouseWheeled = false, timeOut;

$(window).on( 'mousewheel', function( e ){
    var delta = e.originalEvent.wheelDeltaY;

    if (!mouseWheeled & Math.abs(delta) >= 10){
        mouseWheeled = true;

        if (delta >= 0){
            GoUp();
        } else {
            GoDown();
        }
        clearTimeout(timeOut);
        timeOut = setTimeout(function(){
            mouseWheeled = false;
        }, 500);
    }
});

$(document).ready(function () {
    $(document).keydown(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        switch (keycode) {
            case 37:
                GoUp();
            break;
            case 39:
                GoDown();
            break;
        }
    });

    var interval = setInterval(function(){
        if($section_active == 'slide2') {
            GoToHome();
        } else {
            GoDown();
        }
      }, 5000);

    $(".arrow_up").click(function () {
        clearInterval(interval);
        interval = setInterval(function(){
            if($section_active == 'slide2') {
                GoToHome();
            } else {
                GoDown();
            }
      }, 5000);
        GoUp();
    });
    $(".arrow_down").click(function () {
        clearInterval(interval);
        interval = setInterval(function(){
            if($section_active == 'slide2') {
                GoToHome();
            } else {
                GoDown();
            }
      }, 5000);
        GoDown();
    });


});

function GoToHome(){
    window.location.hash = "#";
    $(".all").css("top", "0%");
    $(".arrow_up").css("opacity", "0");
    setTimeout(function () {
        $(".arrow_up").css("display", "none");
    }, 500);
    $section_active="home";
    $counter = 1;
    $('.counter').html($counter + '/3');
}

function GoToSlide_1(){
    window.location.hash = "slide1";
    $(".arrow_up").css("display", "block");
    $(".arrow_up").css("opacity", "1");
    $(".arrow_down").css("opacity", "1");
    $(".arrow_down").css("cursor", "pointer");
    $(".slide_1").css("margin-left", "0px");
    $(".all").css("top", "-100%");
    $section_active = "slide1";
    $counter = 2;
    $('.counter').html($counter + '/3');
}

function GoToSlide_2() {
    window.location.hash = "slide2";
    $(".arrow_up").css("display", "block");
    $(".arrow_up").css("opacity", "1");
    $(".arrow_down").css("opacity", "1");
    $(".arrow_down").css("cursor", "pointer");
    $(".slide_1").css("margin-left", "0px");
    $(".all").css("top", "-200%");
    $section_active = "slide2";
    $counter = 3;
    $('.counter').html($counter + '/3');
}

function GoUp(){
    switch($section_active) {
        case "slide1":
            GoToHome();
            break;
        case "slide2":
            GoToSlide_1();
            break;
    }
}

function GoDown(){
    switch($section_active) {
        case "home":
            GoToSlide_1();
            break;
        case "slide1":
            GoToSlide_2();
            break;
    }
}



