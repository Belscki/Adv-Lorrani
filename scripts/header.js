$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#princHeader").toggle();
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$(document).ready(function() {
    // Quando o mouse entra na div
    $('.item-area').on('mouseenter', function() {
        // Adiciona a classe 'hovered' na div que está sendo hover
        $(this).addClass('hovered');
        
        // Adiciona a classe 'not-hovered' nas outras divs
        $('.item-area').not(this).addClass('not-hovered');
    });

    // Quando o mouse sai da div
    $('.item-area').on('mouseleave', function() {
        // Remove as classes 'hovered' e 'not-hovered'
        $(this).removeClass('hovered');
        $('.item-area').removeClass('not-hovered');
    });
});