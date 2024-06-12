$("#menu").click(function(){
    $(".shadow").addClass("overlay");
    $("#mobile-menu").addClass("show-menu");
    $(".mobile-menu-element").addClass("show-menu-element");
});

$("#close-menu").click(function(){
    $(".shadow").removeClass("overlay");
    $("#mobile-menu").removeClass("show-menu");
    $(".mobile-menu-element").removeClass("show-menu-element");
});