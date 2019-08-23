import $ from 'jquery'
import './css/index.css'
import './css/index.less'

$(function(){
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', function() {
        return 'yellow';
    })
})

class Person {
    static info = {name: 'xx', age: 20}
}
console.log(Person.info.name)