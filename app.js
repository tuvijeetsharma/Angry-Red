var str;
document.onkeydown = function(e) { 
    switch (e.keyCode) { 
        case 37: 
            str = 'Left'; 
            break; 
        case 38: 
            str = 'Up'; 
            break; 
        case 39: 
            str = 'Right'; 
            break; 
        case 40: 
            str = 'Down'; 
            break; 
    } 
}