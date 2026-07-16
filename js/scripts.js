/* /js/scripts.js in github Silus-Counter-Steak making silus-counter-steak.bauska.org */
/* July 13, 2026 = ## (## hours approx)
 */
let counter = 20000;
/* 20,000 from July 15 (7 hours - 1 day), 
  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
