import './style.css'
import {cube} from './math.js'
import printMe from './print'
import _ from 'lodash'
function component() {
    var element = document.createElement('div');

    var pre = document.createElement('pre')
    pre.innerHTML = _.join(['Hello webpack', '5 cubed is equal to ' + cube(5)], '\n')
    element.appendChild(pre)

    var btn = document.createElement('btn')
    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe
    element.appendChild(btn)
    return element;
  }
  var element = component()
  document.body.appendChild(element)

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accept updating printjs')
    document.body.removeChild(element)
    document.body.appendChild(component())
  })
}

  