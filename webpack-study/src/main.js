import $ from 'jquery'

$(function(){
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', function() {
        return 'red';
    })
})