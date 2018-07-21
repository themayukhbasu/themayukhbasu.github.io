$(document).ready(function(){
    $("#cabin").hover(function(){
        var div = $("#cabin");
        div.css("border-radius", "30%");
        div.animate({height: '300px', width: '300px'}, 1000);
        div.animate({width: '180px', height: '130px'}, 3000);   
    });

    $("#circus").hover(function(){
        var div = $("#circus");
        div.css("border-radius", "30%");
        div.animate({height: '300px', width: '300px'}, 1000);
        div.animate({width: '180px', height: '130px'}, 3000);   
    });

    $("#game").hover(function(){
        var div = $("#game");
        div.css("border-radius", "30%");
        div.animate({height: '300px', width: '300px'}, 1000);
        div.animate({width: '180px', height: '130px'}, 3000);   
    });

    $("#safe").hover(function(){
        var div = $("#safe");
        div.css("border-radius", "30%");
        div.animate({height: '300px', width: '300px'}, 1000);
        div.animate({width: '180px', height: '130px'}, 3000);   
    });

    $("#submarine").hover(function(){
        var div = $("#submarine");
        div.css("border-radius", "30%");
        div.animate({height: '300px', width: '300px'}, 1000);
        div.animate({width: '180px', height: '130px'}, 3000);   
    });
});