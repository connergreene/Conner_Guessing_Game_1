      var randomNumber = Math.floor(Math.random() * 100) + 1;
      var statusOutput = document.getElementById('status_output');
      var guessInput = document.getElementById('guessInput');
      var guessOutput = document.getElementById('guess_output');
      var counter = 0;
      var guessList = [];

     
      function checkGuess() {
        var guessVal = parseInt(guessInput.value);
        if (counter < 10 && guessVal) {
          counter++;
          if (guessVal != randomNumber && counter ==1) {
            if(guessVal <= (randomNumber-10) || guessVal >= (randomNumber+10)){
              statusOutput.value = "Cold! Guess again.";

            }
            else if (guessVal >= (randomNumber-10) && guessVal <= (randomNumber+10)) {
              statusOutput.value = "Warm! Guess again.";
            }
          }
          
          else if(guessVal != randomNumber && counter >1){
            if(guessVal <= (randomNumber-10) || guessVal >= (randomNumber+10)){
              statusOutput.value = "Cold! Guess again.";
            }
            else if (guessVal >= (randomNumber-10) && guessVal <= (randomNumber+10)) {
              statusOutput.value = "Warm! Guess again.";
            }
          }
          if (guessVal == randomNumber) {
            statusOutput.value = "You guessed the correct number! It was " + randomNumber + "."
            +  " It only took you " + counter + " tries to get right.";
          }
          }
        else if (counter == 10) {
          statusOutput.value = "You weren't able to guess the correct number.  The number was " + randomNumber;
        }
        guessList.push(guessVal);
        guessOutput.value = guessList.toString() +"\n";
      
        return false;
      }

      function clearFields() {
        guessInput.value = "";
        guessOutput.value = "";
        guessList = [];
        counter = 0;
        statusOutput.value = "You have yet to guess anything.";
        randomNumber = Math.floor(Math.random() * 100) + 1;
        return false;
      }

      function giveAnswer(){
        statusOutput.value = "Never give up! But the answer is " + randomNumber;
        return false;
      }
