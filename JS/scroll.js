
$(function(){
    $('a[href^="#"]').click(function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;

        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
});

$(function() {
    var count = 50;
    $('.topic-text').each(function(){
        var thisText = $(this).text();
        var textLength = thisText.length;

        if(textLength > count){
            var showText = thisText.substring(0, count);
            var insertText = showText + '…';
            $(this).html(insertText);
        };
    });
});

