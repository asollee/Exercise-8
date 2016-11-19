// bring text into  p5 as string
// use at least 3 expressions to parse the string of text
// use http://regexr.com/ as a guide to formulate your expressions

// visualize your data
//movement and interactivty = bonus


var joinedText, story;
var passage;



function preload() {
  story = loadStrings("data/aiw.txt");
}

function setup() {

  createCanvas(400, 400);
  background(0);
  //console.log(story);


  joinedText = join(story, " ");

  var ver1 = joinedText.replace(/\*/g, '');
  //console.log(ver1);

  var ver2 = ver1.replace(/'/g, '"');
  //console.log(ver2);

  passageStart = ver2.indexOf("Alice was");
  passageEnd = ver2.indexOf("fall was over");
  var end = "fall was over";
  passage = ver2.substring(passageStart, passageEnd + end.length);
  //console.log(passage);

  var hole = passage.replace(/hole/gi, ' O ');
  console.log(hole);


  var alice = passage.match(/Alice/gi);
  var rabbit = passage.match(/Rabbit/gi);
  var downNumber = passage.match(/Down/gi);

}

function draw() {
  background(0);

  // Text
  var downNumber = passage.match(/Down/gi);
  for (var d = 0; d <= downNumber.length; d += 1) {
    textSize(121 - (d * 10));
    fill(255, 200 - (d * 20));
    strokeWeight(5 - d);
    textAlign(CENTER);
    text("Down", 200, height / 2 + (d * 20));
  }

  // White Rabbit
  whiteRabbit(mouseX + random(0, 3), mouseY + random(0, 3));


  // Furniture


  // Alice
  var alice = passage.match(/Alice/gi);
  for (var a = 0; a <= alice.length; a += 1) {
    stroke(0);
    strokeWeight(0);
    fill(105, 196, 255);
    //ellipse(50 + (a * 20), 30, 40, 120);
    ellipse(mouseX + (a * 20), 30, 40, 120);
  }


} // Draw loop BB

/*
function objects() {

}
*/

function whiteRabbit(xLoc, yLoc) {
  strokeWeight(1);
  //Pocketwatch
  fill(255, 194, 72);
  ellipse(xLoc - 20, yLoc, 45, 45);
  
  fill(255);
  ellipse(xLoc, yLoc, 50, 60); // body
  ellipse(xLoc + 15, yLoc - 60, 10, 40); // ears
  ellipse(xLoc - 15, yLoc - 60, 10, 40);
  ellipse(xLoc, yLoc - 30, 50, 50); // head
  //nose
  fill(255, 169, 243);
  triangle(xLoc - 5, yLoc - 25, xLoc + 5, yLoc - 25, xLoc, yLoc - 20);
  //glasses
  fill(134, 215, 255, 100);
  stroke(0.5);
  ellipse(xLoc + 7, yLoc - 25, 10, 10);
  ellipse(xLoc - 7, yLoc - 25, 10, 10);
  //feet
  fill(255);
  ellipse(xLoc + 15, yLoc + 30, 20, 15);
  ellipse(xLoc - 15, yLoc + 30, 20, 15);
}