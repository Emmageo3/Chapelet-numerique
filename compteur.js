var counterVal = 0;

var audio = new Audio('bip.wav');

function incrementClick(){
    updateDisplay(++counterVal);
    audio.play();
    
    if (counterVal >= 34) {
        counterVal = 0;
        updateDisplay(counterVal);
    }
}

function resetCounter(){
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById('counter-label').innerHTML = val;
}

//On crée une date
let date1 = new Date();

let dateLocale = date1.toLocaleString('fr-FR',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'});

document.getElementById('p1').innerHTML = dateLocale;

let date2 = new Date();

let dateLocale2 = date2.toLocaleString('ar-TN-u-ca-islamic',{
    year: 'numeric',
    month: 'long',
    day: 'numeric'});

document.getElementById('arabe').innerHTML = dateLocale2;

window.addEventListener('load',horloge);
        function horloge(){
            let d = new Date();

            document.getElementById('heure').innerHTML = d.toLocaleTimeString();
            setTimeout(horloge,1000);
        }

        function roserouge(){
            let corps = document.getElementById('yaram');
            corps.style.background = 'linear-gradient(45deg, pink, red)';
        }

        function jaunevert(){
            let corps = document.getElementById('yaram');
            corps.style.background = 'linear-gradient(45deg, yellow, green)';
        }
        function blancbleu(){
            let corps = document.getElementById('yaram');
            corps.style.background = 'linear-gradient(45deg, white, blue)';
        }
        function jauneorange(){
            let corps = document.getElementById('yaram');
            corps.style.background = 'linear-gradient(45deg, yellow, orange)';
        }
        function blancmarron(){
            let corps = document.getElementById('yaram');
            corps.style.background = 'linear-gradient(45deg, white, brown)';
        }
        function blancgris(){
            let corps = document.getElementById('yaram');
            corps.style.background = 'linear-gradient(45deg, white, grey)';
        }

        

       
