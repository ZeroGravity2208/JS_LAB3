//deklarowanie 
button_Szyfruj = document.querySelector('.szyfruj');
button_Deszyfruj = document.querySelector('.deszyfruj');
text = document.querySelector('.text');
klucz = document.querySelector('.klucz');
p = document.querySelector('p');
jeden = [];
drugi = [];
trzeci = [];
wyjscie = '';
split = () => {
    jeden = [];
    drugi = [];
    trzeci = [];
    for (let i = 0; i < klucz.value.length; i += 3) {
        jeden.push(klucz.value[i]);
    }
    for (let i = 1; i < klucz.value.length; i += 3) {
        drugi.push(klucz.value[i]);
    }
    for (let i = 2; i < klucz.value.length; i += 3) {
        trzeci.push(klucz.value[i]);
    }
}
//button szyfrowanie
button_Szyfruj.addEventListener('click', () => {
    split();
    wyjscie = '';
    for (let i = 0; i < text.value.length; i++) {
        if (i == 0 || i % 3 == 0) {
            if (text.value[i] === ' ') {
                wyjscie += ' ';
            } else {
                wyjscie += jeden[text.value.charCodeAt(i) - 97];
            }
        } else if ((i - 1) % 3 == 0) {
            if (text.value[i] === ' ') {
                wyjscie += ' ';
            } else {
                wyjscie += drugi[text.value.charCodeAt(i) - 97];
            }
        } else {
            if (text.value[i] === ' ') {
                wyjscie += ' ';
            } else {
                wyjscie+= trzeci[text.value.charCodeAt(i) - 97];
            }
        }
    }
    p.innerHTML = wyjscie;
});
//button deszyfrowanie
button_Deszyfruj.addEventListener('click', () => {
    split();
    wyjscie = '';
    for (let i = 0; i < text.value.length; i++) {
        if (i == 0 || i % 3 == 0) {
            if (text.value[i] === ' ') {
                wyjscie += ' ';
            } else {
                wyjscie += String.fromCharCode(jeden.indexOf(text.value[i]) + 97);
            }
        } else if ((i - 1) % 3 == 0) {
            if (text.value[i] === ' ') {
                wyjscie += ' ';
            } else {
                wyjscie += String.fromCharCode(drugi.indexOf(text.value[i]) + 97);
            }
        } else {
            if (text.value[i] === ' ') {
                wyjscie += ' ';
            } else {
                wyjscie += String.fromCharCode(trzeci.indexOf(text.value[i]) + 97);
            }
        }
    }
    p.innerHTML = wyjscie;
});