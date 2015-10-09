$(document).ready(function() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  var arr = [];
  $("#enter").on('click', function() {
    var val = $('input').val();
    if (arr.length >= 1 && isRepeat(Number(val), arr)){
      $('#hint').text("You already guessed this!  Guess again.");
    }    
    else if(arr.length < 10){
      arr.push(val);
      var $li = $('<li>' + val + '</li>');
      if (isHot(Number(val), randomNumber, 10)) {
        $li.css('color', 'red');
      }

      else if (isCold(Number(val), randomNumber, 10)) {
        $li.css('color', 'blue');
      }
      addHint(Number(val), randomNumber, arr);
      $('ol').append($li);
    }

    else {
      $('#hint').text('Reached the guess limit! The number is ' + randomNumber);
      randomNumber = Math.floor(Math.random() * 100) + 1;
      arr = [];
      $("ol").empty();
    }
  });

  $("#giveHint").on('click', function() {
    $('#hint').text('The number is ' + randomNumber);
  });

  $("#restart").on('click', function() {
    $('#hint').text('');
    $('#hint').css('color', 'black');
    randomNumber = Math.floor(Math.random() * 100) + 1;
    arr = [];
    $("ol").empty()
    $('body').css('background-image', 'url(18hgjti706ptljpg.jpg)');
  });
});

function isRepeat(input, arr){
  for(var i = 0; i < arr.length; i++){
    if (input == arr[i]){
      return true;
    }
  }
  return false;
}

function isHotter(input, answer, arr) {
  if (Math.abs(answer - input) < Math.abs(answer - arr[arr.length - 2])) {
    return true;
  }
  return false;
}

function isColder(input, answer, arr) {
  if (Math.abs(answer - input) > Math.abs(answer - arr[arr.length - 2])) {
    return true;
  }
  return false;
}
function isHot(input, answer, range) {
  if (Math.abs(answer - input) < range) {
    return true;
  }
  return false;
}

function isCold(input, answer, range) {
  if (Math.abs(answer - input) > range) {
    return true;
  }
  return false;
}

function addHint(val, answer, arr) {
  if (val === answer) {
    $('#hint').css('color', 'red');
    $('#hint').text('You win! Hit restart to go again!');
    $('body').css('background-image', 'url(0519be5e95e79191636981ae784fa0313b715d-wm.jpg)');
    $('body').css('background-size', 'cover');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('background-position', 'center center');
  }

  else if (val < answer && arr.length == 1) {
    $('#hint').text('Low guess. Guess higher.');
  }
  
  else if (val > answer && arr.length == 1) {
    $('#hint').text('High guess. Guess lower.');
  }

  else if (val < answer && isColder(val, answer, arr)) {
    $('#hint').text('Low guess and you are getting colder! Guess higher.');
  }

  else if (val < answer && isHotter(val, answer, arr)) {
    $('#hint').text('Low guess but you are getting warmer! Guess higher.');
  }

  else if (val > answer && isColder(val, answer, arr)) {
    $('#hint').text('High guess and you are getting colder! Guess lower.');
  }

  else if (val > answer && isHotter(val, answer, arr)) {
    $('#hint').text('High guess but you are getting warmer! Guess lower.');
  }

}
