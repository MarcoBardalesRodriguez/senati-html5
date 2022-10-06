$(function(){
    var textArea = $('#content'),
    hiddenDiv = $(document.createElement('div')),
    content = null;

    textArea.addClass('noscroll');
    hiddenDiv.addClass('hiddendiv');

    $(textArea).after(hiddenDiv);

    textArea.on('keyup', function(){
        content = $(this).val();
        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');
        $(this).css('height', hiddenDiv.height());

        console.log(content);
    });

});