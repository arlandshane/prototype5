
$(".btn").click(function () {
    $("p").text("X");
    $("p").css("margin", "0");
    $("p").css("position", "inherit");
    $("p").css("left", "10%");
    $("p").css("top", "10%");
    $(".btn").css("background-color", "pink");
    $(".btn").css("border-radius", "100%");
    $(".btn").css("left", "48%");
    $(".btn").css("top", "85%");
    $(".btn").css("transition-duration", "200ms");
    $(".btn").css("width", "2.5rem");
    $(".btn").css("height", "4.3rem");
    $(".btn").click(function () {
        $(".btn").css("background-color", "peachpuff");
        $("button").css("opacity", "1").css("background-color", "pink");
        $(".tile>img").css("transition-duration", "700ms").css("opacity", "1");
        $(".tile").css("background", "none");
        $("body").css("background-color", "pink");
    });
});
