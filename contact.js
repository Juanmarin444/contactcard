$(document).ready(function(){
    $('button').click(function(){
        var first = $('#firsti').val();
        var last = $('#lasti').val();
        var descrip = $('#descripi').val();
       
        $('#right').append('<div class="cards"><h3>'+first+'<a>  </a>'+last+'</h3></div>'); 
        $('.cards').append('<h3 class="description">'+descrip+'</h3>');
        $('.description').hide();
        $('.cards').click(function(){
            $('.description').toggle();
        })
    })
});