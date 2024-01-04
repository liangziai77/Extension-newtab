$(document).ready(function() {
    $("#menu").click(function(s) {
        $(this).toggleClass("on"),
        $(".list").toggleClass("closed")

    }),
    $("#content").click(function(s) {
        $(".on").removeClass("on"),
        $(".list").addClass("closed")

    })
});