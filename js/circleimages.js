//<!-- jQuery for AboutUs.html circle images -->

$(document).ready(function() {
    $('.image-container-circular').hover(
        function() {
            $(this).find('.overlay').animate({
                width: '100%',
                height: '100%'
            }, 300);

            $(this).find('.text').animate({
                opacity: 1
            },300)
        },

        function() {
            $(this).find('.overlay').animate({
                width: '0',
                height: '0'
            }, 300);

            $(this).find('.text').animate({
                opacity: 0
            },300);
        }
    );
});
