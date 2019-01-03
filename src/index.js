import Vue from 'vue'
import App from './views/App.vue'

console.log('hello webpack')
new Vue({
    ...App,
    el: "#app",
})