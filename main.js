var car = document.getElementById("obstacleContainer"),
    container = document.getElementById("playerContainer"),
    player = document.getElementById("player"),
    score = 0,
    highScore = 0,
    wordIndex = 0,
    words = ["car", "rabbit", "man", "kid"],
    myVar;

function move(){
  car.classList.add("goRight");
  car.style.visibility = "visible";
  myVar = setInterval(changeWord, 4000);
}

function jump() {
  console.log("hi");
  container.classList.toggle("jump");
}
var animationNum = 0;

setInterval(function() {
  if (animationNum == 1) {
      player.setAttribute('data', '../public/images/mario2.svg');
      player.style.width = "100px";
      player.style.height = "500px";
  } else if (animationNum == 2) {
      player.setAttribute('data', '../public/images/mario3.svg');
      player.style.width = "100px";
      player.style.height = "500px";
      animationNum = 0;
  }
  animationNum++;
}, 300);

function changeWord() {
  console.log("hi");
  var word = words[Math.floor(Math.random()*words.length)];
  console.log(word);
  document.getElementById("word").innerHTML = word;
  score++;
  if (score > highScore) {
    highScore = score;
  }
}
