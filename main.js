// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
let name = document.getElementById("char-in").value;

  if (name === "po") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML = "Buddy, I am the dragon warrior!";
    document.getElementById("char-img").src = "img/po.png";
  }
  else if (name === "tigress") {
    document.getElementById("char-name").innerHTML = "tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png"  ;
  }
  else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug";
    document.getElementById("char-img").src = "img/mantis.png";
    }
  else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "monkey";
    document.getElementById("char-quote").innerHTML = "WE should hang out.";
    document.getElementById("char-img").src = "img/monkey.png";
    }
  else if (name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML = "I dont need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  }
  else if (name === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML = "Wings of justice!";
    document.getElementById("char-img").src = "img/crane.png";
  }
  else {
    document.getElementById("char-name").innerHTML = "????????";
    document.getElementById("char-quote").innerHTML = "----------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}