$(document).ready(function () {

    $(".gotoServices").click(function () {
        $('html, body').animate({
            scrollTop: $(".services").offset().top
        }, 800);
    });

    $(".whereAreWe").click(function () {
        $('html, body').animate({
            scrollTop: $(".map").offset().top
        }, 800);
    });

    $(".whatDoThePeopleSay").click(function () {
        $('html, body').animate({
            scrollTop: $(".weMatter").offset().top
        }, 800);
    });

    $(".Contact").click(function () {
        $('html, body').animate({
            scrollTop: $(".mailForm").offset().top
        }, 800);
    });

    $(".phone").click(function () {
        $('html, body').animate({
            scrollTop: $(".center").offset().top
        }, 800);
    });
});
