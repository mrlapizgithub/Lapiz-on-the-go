var apps = [function(body, game, random){
  body.html('<h1 class = "font1 text-center">Spanish numbers</h1><p class = "ml-2">How to play: Translate the text that is given to you. If you get it correct, your score increases, if you get it wrong, your score resets to 0. Have fun!</p><div class = "m-2 p-2 bg-primary rounded shadow-cus1"><p class = "m-0">Your score: <span class = "score">0</span></p><p class = "mb-1">Turn <span class = "q-cont">Loading...</span> into a number.</p><div class = "input-group mb-3"><input type = "number" class = "form-control answer" placeholder = "Your answer" min = "0" max = "10"><div class="input-group-append"><button class = "btn btn-success submit" type = "button" id = "button-addon2">Submit</button></div></div></div>');
  var q = [{q:"cero",a:0},{q:"uno",a:1},{q:"dos",a:2},{q:"tres",a:3},{q:"cuatro",a:4},{q:"cinco",a:5},{q:"seis",a:6},{q:"siete",a:7},{q:"ocho",a:8},{q:"nueve",a:9},{q:"diez",a:10}];
  initgame($('.q-cont'),q,$('.answer'),$('.submit'),$('.score'));
},function(body, game, random){
  body.html('<h1 class = "font1 text-center">Simple Words</h1><p class = "ml-2">How to play: Translate the text that is given to you. If you get it correct, your score increases, if you get it wrong, your score resets to 0. Have fun!</p><div class = "m-2 p-2 bg-primary rounded shadow-cus1"><p class = "m-0">Your score: <span class = "score">0</span></p><p class = "mb-1">What is <span class = "q-cont">Loading...</span> in english?</p><div class = "input-group mb-3"><input class = "form-control answer"><div class="input-group-append"><button class = "btn btn-success submit" type = "button" id = "button-addon2">Submit</button></div></div></div>');
  var es = "Adiós,Hola,Buenos días,Buenas tardes,Buenas Noches,Chao,Hasta Luego,Hasta mañana,Señor,Señora,Señorita".split(",");
  var en = "Goodbye,Hello,Good morning,Good afternoon,Good night,Bye,See you later,See you tomorrow,Mister,Misses,Miss".split(",");
  var q = [];
  for(var i = 0; i < es.length; i ++){q.push({q:es[i],a:en[i]});}
  initgame($('.q-cont'),q,$('.answer'),$('.submit'),$('.score'));
},function(body, game, random){
  body.html('<h1 class = "font1 text-center">Number Guesser</h1><p class = "ml-2">How to play: Guess the number from 1-(a number 2-10). If you get it right, your score increases, if you get it wrong, your score decreases. Have fun!</p><div class = "m-2 p-2 bg-primary rounded shadow-cus1"><p class = "m-0">Your score: <span class = "score">0</span></p><p class = "mb-1">I am thinking of a number from 1-<span class = "q-num">2</span>. What is the number?</p><div class = "input-group mb-3"><input type = "number" class = "form-control answer" min = "1" max = "20"><div class="input-group-append"><button class = "btn btn-success submit" type = "button" id = "button-addon2">Submit</button></div></div></div>');
  var range = random(2,10);
  var num = random(1,range);
  var score = 0;
  $('.q-num').html(range);
  $('.submit').click(function(){
    if($('.answer').val()==num){
      score+=range;
      $('.score').html(score);
    }else{
      score--;
      $('.score').html(score);
      alert("The number was "+num+"!");
    }
    range = random(2,10);
    num = random(1,range);
    $('.q-num').html(range);
    $('.answer').val("");
  });
  $('.answer').keypress(function(e){
    if(e.which==13){
      $('.submit').trigger("click");
    }
  });
},function(body, game, random){
  body.html('<h1 class = "font1 text-center">Number Guesser <sup>-1</sup></h1><p class = "ml-2">How to play: You have to pick a number from 1-(a number 2-10). Then, the robot guesses and if he gets it correct, your score increases, if you get it wrong, your score decreases. Have fun!</p><div class = "m-2 p-2 bg-primary rounded shadow-cus1"><p class = "m-0">Your score: <span class = "score">0</span></p><p class = "mb-1">You are thinking of a number from 1-<span class = "q-num">2</span>. Choose the number.</p><div class = "input-group mb-3"><input type = "number" class = "form-control answer" min = "1" max = "20"><div class="input-group-append"><button class = "btn btn-success submit" type = "button" id = "button-addon2">Submit</button></div></div></div>');
  var range = random(2,10);
  var robotguess = random(1,range);
  var score = 0;
  $('.q-num').html(range);
  $('.submit').click(function(){
    if($('.answer').val()==robotguess){
      score+=range;
      $('.score').html(score);
    }else{
      score--;
      $('.score').html(score);
      alert("The robot guessed "+robotguess+"!");
    }
    range = random(2,10);
    robotguess = random(1,range);
    $('.q-num').html(range);
    $('.answer').val("");
  });
  $('.answer').keypress(function(e){
    if(e.which==13){
      $('.submit').trigger("click");
    }
  });  
}];
$('.close').click(function(){
  $('.lmodal').fadeOut(190);
  $('body').css('overflow','auto');
});
$('.w-100c').css('max-width',$(window).width()-16);
function initgame(qcont,questions,answer,btn,score){
  var game = {
    questions:questions,
    answer:answer,
    btn:btn,
    score:score,
    s:0,
    qcont:qcont
  };
  with(game){
    var ques = questions[Math.floor(Math.random()*questions.length)];
    qcont.html(ques.q);
    score.html(s);
    btn.click(function(){
      if(answer.val()==ques.a){
        s++;
        score.html(s);
      }else if(answer.val().toLowerCase().replace(/\ /g,"")==ques.a.toString().toLowerCase().replace(/\ /g,"")){
        s++;
        score.html(s);
      }else{
        s=0;
        score.html(s);
        alert("You were wrong, the correct answer is "+ques.a);
      }
      ques = questions[Math.floor(Math.random()*questions.length)];
      qcont.html(ques.q);
      answer.val("");
    });
    answer.keypress(function(e){
      if(e.which==13){
        btn.trigger("click");
      }
    });
  }
}
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$('.open').each(function(){
  $(this).click(function(){
    var index = $('.open').index(this);
    apps[index]($('.html'), initgame, random);
    $('.lmodal').fadeIn(190);
    $('body').css('overflow',"hidden");
  });
});