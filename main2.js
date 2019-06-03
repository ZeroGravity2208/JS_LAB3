areaKey = document.querySelector('.key');
areaText = document.querySelector('.text');
szyfrowanie = document.querySelector('.szyfruj');
deszyfrowanie = document. querySelector('.deszyfruj');
coded: String();
p = document.querySelector('p');
szyfrowanie.addEventListener('click', () => {
 coded = '';
 for (let i = 0; i < areaText.value.length; i++) {
 if (areaText.value[i] === ' ') {
 coded += ' ';
 } else {
 coded += areaKey.value[areaText.value.charCodeAt(i) - 97];
 }
 }
 p.innerHTML = "<h1>Twój tekst po zaszyfrowaniu:</h1> " + coded;
})
deszyfrowanie.addEventListener('click', () => {
 coded = '';
 for (let i = 0; i < areaText.value.length; i++) {
 if (areaText.value[i] === ' ') {
 coded += ' ';
 } else {
 coded += String.fromCharCode(areaKey.value.indexOf(areaText.value[i])
+ 97);
 }
 }
 p.innerHTML = "<h1>Twój tekst po odszyfrowaniu:</h1> " + coded;
})