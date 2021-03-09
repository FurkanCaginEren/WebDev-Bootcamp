var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern=[];

var level = 0;

var started = false;


$(".btn").on("click", function(){
    
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

  });


  $(document).keypress(function() {
    if (!started) {

      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

function nextSequence(){

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.round(Math.random()*3);

    var randomChoosenColour = buttonColours[randomNumber];
    
    $("#"+randomChoosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour);
    
    gamePattern.push(randomChoosenColour);


    console.log(gamePattern);

}

function playSound(key){

    var audio = new Audio("sounds/"+key+".mp3")
    audio.play()

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");

    },100)


}

function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {


      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")

        },200)
        playSound("wrong")

        $("#level-title").text("Game over,Press Any Key to Restart")
        startOver()
    }

}
function startOver(){

    level = 0
    gamePattern = []
    started = false

}