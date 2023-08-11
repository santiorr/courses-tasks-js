var timer;
var left = 0; // начальное значение
function moveL(id) {
    var elem = document.getElementById(id);
    function frame() { // функция для отрисовки
        if(left > 350) 
            left--;
        elem.style.left = left + 'px';            
    }
    timer = setInterval(frame, 10); // рисовать каждые 10мс
}
function moveR(id) {
    var elem = document.getElementById(id);
    function frame() { // функция для отрисовки
        if(left < 350) 
            left++;
        elem.style.left = left + 'px';            
    }
    timer = setInterval(frame, 10); // рисовать каждые 10мс
}

function stop() {        
        clearInterval(timer);// завершить анимацию            
}