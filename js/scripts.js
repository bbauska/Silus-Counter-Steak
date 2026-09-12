/* /js/scripts.js in github Silus-Counter-Steak making silus-counter-steak.bauska.org */
/* July 13, 2026 = ## (## hours approx)
 */
let counter = 20000+28000+32000+10000+12200+7300+8750+21750+60000+50000;
/* 20,000 from July 15 (7 hours - 1 day), 
   28,000 from July 16 (? hours - 1 day)
   32,000 from July 20 10pm - July 21 3:32am - 1 day)
   10,000 7/24/26
   12,200 8/3/26
   7,300 8/25/26 to 8/26/26
   8,750 9/5/2026 8:00pm to 9/5/2026 9:28pm
   21,750 9/5/2026 5 hours 12am-5am
   60,000 9/6/26 7p - 5am 9/7/26
   50,000 9/11/26 5pm - 3am 
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
