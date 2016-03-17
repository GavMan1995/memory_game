$(document).ready(function(){
  var card = "";
  var card2 = "";
  var colors = ["yellow", "yellow", "blue", "blue", "pink", "pink", "red", "red", "orange", "orange", "purple", "purple"];
  var clickCount = 0;



  $(".card").click(function(){
    var number = Math.floor(Math.random() * colors.length);
    var rndColor = colors[number];

    var color = colors.splice(number, 1);
    if(clickCount === 0){
      card = color;
      $(this).toggleClass(rndColor);
      clickCount = 1;
    }else if (clickCount === 1) {
      card2 = color;
      $(this).toggleClass(rndColor);
      clickCount = 0;
    }
    match();
  });


   function match(){
     if(card === "" || card2 === ""){

     }else if(card === card2){
       alert("good job it was a match");
       resetCard();
     }else if(card != card){
       alert("sorry that wasnt a match");
       resetCard();
       card.addClass('hide');
       card2.addClass('hide');
     }else if(card != card2) {
       alert('no match');
       resetCard();
       card.addClass('hide');
       card2.addClass('hide');
     }
   }

   function resetCard(){
     card = "";
     card2 = "";
   }
});
