$.(document).ready(function(){
    $.('.thumb').hover(function(){
          $('.main_image img').attr('src',$(this).children('img').attr('src'));
    });
})