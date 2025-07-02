
var cl = document.getElementsByClassName('cl-element');

for (var i = 0; i < cl.length; i++) {

    cl[i].addEventListener('click', function () {
        for (var j = 0; j < cl.length; j++) {
            cl[j].style.color = '';
        }
        this.style.color = 'blue';
    });

    
}
