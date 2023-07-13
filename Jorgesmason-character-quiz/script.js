function $collectInfo() {
    var inputs = document.getElementsByClassName('user-answer');
    var output = document.getElementById('output');
    var correctAnswerslist = document.getElementById('correct-answers-list');
    var $correctAnswers = [
      '1. Dr Doe',
      '2. Bill Chakor', 
      '3. Luke Dripwalker', 
      '4. Almighty Loaf', 
      '5. Girl from the RADAR O REILLY!!! (im a fangirl) meme', 
      '6. Lacey audio', 
      '7. Rocky BFDI', 
      '8. Kazuma Kiryu', 
      '9. Phoenix Wright', 
      '10. TV Head Man'
    ];
    document.getElementById('results').style.display = "block";
    output.innerHTML = '';
    correctAnswerslist.innerHTML = '';

    for (var i = 0; i < inputs.length; i++) {
      var inputValue = inputs[i].value;

      var paragraph = document.createElement('p');
      paragraph.textContent = 1 + i + ". " + inputValue;

      output.appendChild(paragraph);
    }

    let txt = "";
    $correctAnswers.forEach(myFunction);
    document.getElementById('correct-answers-list').innerHTML = txt;

  function myFunction(value, index, array) {
    txt += value + "<br>"; 
  }

  }

  function $userName() {
    var $invalidNames = ['Jorge', 'Jorgesmason', 'Jorgeraymason', 'jorgeraymason', 'jorgesmason']
    var name = window.prompt('Enter your name here: ');
    if ($invalidNames.includes(name)) {
       alert("Invalid name. THAT'S MY NAME");
    } else if (name === null || name.trim() === ""){
        alert("You didn't put anything");
    } else {
        document.getElementById('username').innerHTML = (name);
    }

}

