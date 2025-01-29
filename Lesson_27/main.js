$(document).ready(function () {
    $('.tab_button').on('click', function () {
        const type = $(this).data('type');

        $('.tabcontent').hide();

        $('.tab_button').removeClass('active');


        $(`#${type}`).show();

        $(this).addClass('active');
    });

    $('.tab_button').first().click();
});

$(document).ready(function () {
    $("#st1").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st1").css("color", "#FFDD3F");

    });
    $("#st2").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st1, #st2").css("color", "#FFDD3F");

    });
    $("#st3").hover(function () {
        $(".fa-star").css("color", "#8D91A3")
        $("#st1, #st2, #st3").css("color", "#FFDD3F");

    });
    $("#st4").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st1, #st2, #st3, #st4").css("color", "#FFDD3F");

    });
    $("#st5").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st1, #st2, #st3, #st4, #st5").css("color", "#FFDD3F");

    });
});

$(document).ready(function () {
    $("#st11").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st11").css("color", "#FFDD3F");

    });
    $("#st12").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st11, #st12").css("color", "#FFDD3F");

    });
    $("#st13").hover(function () {
        $(".fa-star").css("color", "#8D91A3")
        $("#st11, #st12, #st13").css("color", "#FFDD3F");

    });
    $("#st14").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st11, #st12, #st13, #st14").css("color", "#FFDD3F");

    });
    $("#st15").hover(function () {
        $(".fa-star").css("color", "#8D91A3");
        $("#st11, #st12, #st13, #st14, #st15").css("color", "#FFDD3F");

    });
});