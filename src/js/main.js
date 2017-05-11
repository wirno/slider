var $section_active="home";

var mouseWheeled = false, timeOut;

$(window).on( 'mousewheel', function( e ){
    var delta = e.originalEvent.wheelDeltaY;

    if (!mouseWheeled & Math.abs(delta) >= 10){
        mouseWheeled = true;


        if (delta >= 0){
            GoLeft();
        }

        else {
            GoRight();
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
        console.log(keycode);
        switch (keycode)
        {
            case 37:
                GoLeft();
            break;
            case 39:
                GoRight();
            break;

        }
    });

    setInterval(function(){
        GoRight();
      }, 5000);

    $(".arrow_left").click(function () {
        GoLeft();
    });
    $(".arrow_right").click(function () {
        GoRight();
    });


}); // END DOCUMENT READY

function GoToHome(){
    window.location.hash = "#";
    $(".all").css("left", "0%");
    $(".slide_1").css("margin-left", "-50vh");
    $(".arrow_left").css("opacity", "0");
    setTimeout(function () {
        $(".arrow_left").css("display", "none");
    }, 500);
    $section_active="home";
}


function GoToSlide_1(){
    window.location.hash = "slide1";
    if($section_active=="home") {
        $(".all").css("left", "-100%");
        $(".arrow_right").css("opacity", "1");
        $(".arrow_right").css("cursor", "pointer");
        $(".slide_1").css("margin-left", "0px");

        $(".arrow_left").css("display", "block");
        $(".arrow_left").css("opacity", "1");

        $section_active="slide1";
    }else {
        $(".all").css("left", "-100%");
        $section_active = "slide1";
    }
}

function GoToSlide_2() {
    window.location.hash = "slide2";
    $(".arrow_left").css("display", "block");
    $(".arrow_left").css("opacity", "1");
    $(".arrow_right").css("opacity", "1");
    $(".arrow_right").css("cursor", "pointer");
    $(".slide_1").css("margin-left", "0px");
    $(".all").css("left", "-200%");
    $section_active = "slide2";


}

function GoLeft(){
    switch($section_active) {
        case "slide1":
            GoToHome();
            break;
        case "slide2":
            GoToSlide_1();
            break;
    }
}

function GoRight(){
    switch($section_active) {
        case "home":
            GoToSlide_1();
            break;
        case "slide1":
            GoToSlide_2();
            break;
    }
}



