const input = document.querySelector('.input');
const button = document.querySelector('button');
const inputText = document.querySelector('.text');
const pCoded = document.querySelector('.coded');
const area = document.querySelector("pole_tekstowe");
let amount,text,coded = '';
input.addEventListener('input', e => {
amount = e.target.value;
});
let text1 = new String;
let savings;
button.addEventListener('click', () => {
 amount = parseInt(amount);
 text = area.value;
 coded = '';
 for (let i = 0; i < text.length; i++) {
 let asc = text.charCodeAt(i);
 if (asc == 32) {} else if ((asc > 96) && ((asc + amount) >
122)) {
 jeden = 122 - asc;
 dwa = amount - jeden;
 asc = 96 + dwa;
 } else if (((asc + amount) > 90) && (asc > 64) && (asc < 91))
{
 jeden = 90 - asc;
 dwa = amount - jeden;
 asc = 64 + dwa;
 } else if ((asc + amount) < 97 && asc > 96 && asc < 123) {
 jeden = asc - 97;
 dwa = amount + jeden;
 asc = 123 + dwa;
 } else if ((asc + amount) < 65 && asc > 64 && asc < 91) {
 jeden = asc - 65;
 dwa = amount + jeden;
 asc = 91 + dwa;
 } else {
    asc += amount;
 }
 let letter = String.fromCharCode(asc);
 coded += letter;
 };
 pCoded.innerHTML = "<h1>Twój tekst po zakodowaniu/odkodowaniu:</h1> " +
coded;
});
