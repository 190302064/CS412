

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal_container');

open.addEventListener('click', () => {
    modal.classList.add('show');
});

close.addEventListener('click', () => {
    modal.classList.remove('show');
});


$(document).ready(function(){
  $("button").click(function(){
      $("img.letter").animate({
          left: 1000
      });
  });
});


let diplomas = [" 2015-2019 Druga gimnazija Sarajevo", " 2019-UTT International University of Sarajevo"];

function original(){
for(let i = 0; i < diplomas.length; i++) {
  console.log(diplomas[i]);
  diplomas.sort();
  document.getElementById("text").innerHTML = diplomas;
}
}
 
function reverse() {
diplomas.sort();
diplomas.reverse();
document.getElementById("text").innerHTML = diplomas;
}

var today = new Date();
  var timeNow = today.getHours()
  var welcomemessage = $("#welcomemessage");

switch (true) { 
    case timeNow > 18 : welcomemessage = "Good evening, this is my CV";
    break;
    case timeNow > 12 : welcomemessage = "Good afternoon, this is my CV";
    break;
    case timeNow > 6 : welcomemessage = "Good morning, this is my CV";
    break;
    default: welcomemessage = "Isn't it a bit late to be going over CVs?";
  }

  $('#welcomemessage').html('<h1>' + welcomemessage + '<h1>');

//can be done with if-else instead of switch statements - if (timeNow > 18) {
//welcomemessage = "Good Evening";} elseif (timeNow...