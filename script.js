var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');
const container = document.querySelector('.container-fluid')
var textc = document.querySelector('.textc')
var textx = document.querySelector('#textc')

var navbar = document.querySelector('.navbar')


input.addEventListener('change',function(){
   if(this.checked)
    {
    navbar.classList.add('texttt');
    container.style.background = "#fff";

    } else {
    container.style.background = "#1e2a3a";

    }      
});