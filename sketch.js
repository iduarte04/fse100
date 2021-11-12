let playMenu;
let settingMenu;
let exMenu;
let playButton;
let settingButton;
let exButton;
let button;
let ex1, ex2, ex3;
let exNum;
let titleText;

//variables for ex1
let a, b, line1, draw1 = false; 
let green = 0;

//variables for ex2
let tutorialText;
let wrong;
let wrongPrint;
let accuracy = 0;
let tries = 0;
let answerShape;
let answerColor;
let answerShapeArray;
let answerColorArray;
let wrongAnswersCount;

//variables for ex3
let answerItemArray;
let answerItem;
let img;


function setup() {
  removeElements();
  createCanvas(400, 500);
  background(140);
  if(button){
    button.remove()
  }
  
  textAlign(CENTER);
  textFont('Garamond');
  textSize(50);
  titleText = text('Welcome to Fine Motor Skill Exercises', 0, 20, 400, 200);
 
  
  
  playMenu = mainMenu();
  settingMenu = settingsMenu();
  exMenu = exitMenu();

}

//**********************************************************************
// Main Menu
//**********************************************************************
function mainMenu(){
  playButton = createButton('Play');
  playButton.position(145, 213);
  
   let col = color('#FDA134');
  playButton.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 45px').style('text-align', 'center').style('text-decoration', 'none').style('display','inline-block').style('font-size','16px')
  playButton.mousePressed(changePlay);  
}

//**********************************************************************
// Settings Menu
//**********************************************************************
function settingsMenu(){

  settingButton = createButton('Settings');
  settingButton.position(145, 275);
  let col = color('#D7D7D7');
  settingButton.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 32px').style('text-align', 'center').style('text-decoration', 'none').style('display','inline-block').style('font-size','16px');
  settingButton.mousePressed(settings); 
  
}

//**********************************************************************
// Settings
//**********************************************************************
function settings(){
  playButton.remove()
  settingButton.remove()
  exButton.remove()
  background(230)
  textFont('Garamond');
  fill('Black');
  textAlign(LEFT);
  textSize(50);
  
  let text1;
  text1 = text('Settings', 130, 100, 100, 100);
  
  let text2;
  textSize(20);
  text2 = text('Music', 50, 200);
  
  let slider1;
  slider1 = createSlider(0, 100, 50);
  slider1.position(120, 185);
  
  let checkbox1;
  checkbox1 = createCheckbox('Mute', false);
  checkbox1.position(280, 185);
  
  textSize(20);
  text('Master Audio', 50, 240);
  
  let slider2;
  slider2 = createSlider(0, 100, 50);
  slider2.position(170, 225);
  slider2.style('width', '80px');
  
  let checkbox2;
  checkbox2 = createCheckbox('Mute', false);
  checkbox2.position(280, 225);
  
  let text3;
  textSize(20);
  text3 = text('Sound Effect', 50, 280);
  
  let slider3;
  slider3 = createSlider(0, 100, 50);
  slider3.position(170, 265);
  slider3.style('width', '80px');
  
  let checkbox3;
  checkbox3 = createCheckbox('Mute', false);
  checkbox3.position(280, 265);
  
  let text4;
  textSize(20);
  text4 = text('Language', 50, 320);
  
  let sel;
  sel = createSelect();
  sel.option('English');
  sel.option('español');
  sel.option('français');
  sel.position(170, 305);
  
  backButton();
}

//**********************************************************************
// Exit Menu
//**********************************************************************
function exitMenu(){

  exButton = createButton('Exit');
  exButton.position(145, 337);
  let col = color('#545453');
  exButton.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 48px').style('text-align', 'center').style('text-decoration', 'none').style('display','inline-block').style('font-size','16px');
  exButton.mousePressed(exitfxn)
}

//**********************************************************************
// Change Play
//**********************************************************************
function changePlay() {
  removeElements();
  titleText.clear();
  background(140);

  
  
  backButton();
  exerciseDisplay();
  
}

//**********************************************************************
// Exercise Display
//**********************************************************************
function exerciseDisplay(){
  
  stroke(1)
  rect(50, 80, 300,350)
  fill(200)
  
  ex1 = createButton('Exercise 1');
  ex1.position(120, 120);
  let col = color('Blue');
  ex1.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 48px').style('text-align', 'center').style('text-decoration', 'none').style('display','inline-block').style('font-size','16px');
  
  ex2 = createButton('Exercise 2');
  ex2.position(120, 220);
  ex2.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 48px').style('text-align', 'center').style('text-decoration', 'none').style('display','inline-block').style('font-size','16px');
  
  ex3 = createButton('Exercise 3');
  ex3.position(120, 320);
  ex3.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 48px').style('text-align', 'center').style('text-decoration', 'none').style('display','inline-block').style('font-size','16px');
  
  ex1.mousePressed(exercise1);
  ex2.mousePressed(exercise2);
  ex3.mousePressed(exercise3);
}

//**********************************************************************
// Exit Function
//**********************************************************************
function exitfxn(){
  removeElements();
  titleText.clear();
  background(140);
}

//**********************************************************************
// Back Button
//**********************************************************************
function backButton(){
  
  button = createButton('Back');
  button.position(0, 450);
  let col = color('#545453');
  button.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 48px').style('text-align', 'center').style('text-decoration', 'none').style('display','inline-block').style('font-size','16px');
  button.mousePressed(setup);
}

//**********************************************************************
// Exercise 1
//**********************************************************************

function exercise1(){
  exNum = 1;
  clear();
  removeElements();
  background(140);
  fill('Black');
  title = text('Trace it!', 0, 20, 400, 200);
  drawLine(120, 350, 96, 298);
  
}
  
  


function drawLine(x1, x2, y1, y2){
  
    /*while (dist(x1, y1, x2, y2) < 200){
      x1 = random(100, 300);
      x2 = random(100, 300);
      while (x1 == x2)
        x2 = random(100, 300);

      y1 = random(100, 300);
      y2 = random(100, 300);
      while (x1 == x2)
        y2 = random(100, 300);
    }*/
    a = createVector(x1, y1);
    b = createVector(x2, y2);
    
    strokeWeight(3);
    for(let i = 0.0; i < 1.0; i += 0.05){
      point(lerp(x1, x2, i), lerp(y1, y2, i));
    }
  
    
}

function orthogonalProjection(a, b, p) {
  
  // find nearest point alont a SEGMENT 
  
  d1 = p5.Vector.sub(b, a);
  d2 = p5.Vector.sub(p, a);
  l1 = d1.mag();
  
  dotp = constrain(d2.dot(d1.normalize()), 0, l1);
      
  return p5.Vector.add(a, d1.mult(dotp))
  
}


//**********************************************************************
// Exercise 2
//**********************************************************************
function exercise2(){
  exNum = 2;
  clear();
  removeElements();
  check = 1;
  levelCount = 1;
  level(levelCount);
}

function level(type){
  background(140);
  fill(200);
  textSize(40);
  answerShapeArray = ["Circle", "Triangle", "Square", "Polygon"];
  answerColorArray = ["", "Red ", "Green ", "Yellow ", "Blue "]
  wrongPrint = false;
  if(type < 6){
    setAnswer(1);
    placeCorrectShape();
    placeIncorrectShape();
    mousePressed();
    check = 1;
  }
  else{
    setAnswer(5);
    placeCorrectShape();
    placeIncorrectShape();
    mousePressed();
    check = 1;
  }
}

function setAnswer(ifColor){
  var i = int(random(0, 3));
  var j = int(random(0, ifColor));
  answer = int(random(1, 5));
  answerShape = answerShapeArray[i];
  answerColor = answerColorArray[j];
  tutorialText = text("Pick the " + answerColor + answerShape, 0, 20, 400);
}



function placeCorrectShape(){
  if(answerColor == ""){
    
  }
  else{
    colorShape(answerColor);
  }
  if(answerShape == "Circle"){
    if(answer == 1){
      drawCircle(1);
    }
    else if(answer == 2){
      drawCircle(2);
    }
    else if(answer == 3){
      drawCircle(3);
    }
    else if(answer == 4){
      drawCircle(4);
    }
  }
  else if(answerShape == "Square"){
    if(answer == 1){
      drawSquare(1);
    }
    else if(answer == 2){
      drawSquare(2);
    }
    else if(answer == 3){
      drawSquare(3);
    }
    else if(answer == 4){
      drawSquare(4);
    }
  }
  else if(answerShape == "Triangle"){
    if(answer == 1){
      drawTriangle(1);
    }
    else if(answer == 2){
      drawTriangle(2);
    }
    else if(answer == 3){
      drawTriangle(3);
    }
    else if(answer == 4){
      drawTriangle(4);
    }
  }
}

function placeIncorrectShape(){
  wrongAnswersCount = 1;
  var tick = 0;
  while(tick != 3){
    let s = int(random(0, 4));
    let c = 0
    if(answerColor == ""){
      c = 0
    }
    else{
      c = int(random(1, 5));
    }
    if((answerShapeArray[s] != answerShape)){
      createShape(answerShapeArray[s], answerColorArray[c]);
      tick++;
    }
  }
  
}

function createShape(wrongShape, wrongColor){
  if(wrongColor == ""){
    
  }
  else{
    colorShape(wrongColor);
  }
  if(answer == 1){
    if(wrongAnswersCount == 1){
      drawShape(wrongShape, 2);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 2){
      drawShape(wrongShape, 3);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 3){
      drawShape(wrongShape, 4);
      wrongAnswersCount++;
    }
  }
  else if(answer == 2){
    if(wrongAnswersCount == 1){
      drawShape(wrongShape, 1);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 2){
      drawShape(wrongShape, 3);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 3){
      drawShape(wrongShape, 4);
      wrongAnswersCount++;
    }
  }
  else if(answer == 3){
    if(wrongAnswersCount == 1){
      drawShape(wrongShape, 1);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 2){
      drawShape(wrongShape, 2);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 3){
      drawShape(wrongShape, 4);
      wrongAnswersCount++;
    }
  }
  else if(answer == 4){
    if(wrongAnswersCount == 1){
      drawShape(wrongShape, 1);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 2){
      drawShape(wrongShape, 2);
      wrongAnswersCount++;
    }
    else if(wrongAnswersCount == 3){
      drawShape(wrongShape, 3);
      wrongAnswersCount++;
    }
  }
  
}

function drawShape(wrongShape, pos){
  if(wrongShape == "Circle"){
    drawCircle(pos);
  }
  else if(wrongShape == "Triangle"){
    drawTriangle(pos);
  }
  else if(wrongShape == "Square"){
    drawSquare(pos);
  }
  else if(wrongShape == "Polygon"){
    drawPolygon(pos);
  }
}

function drawCircle(pos){
  if(pos == 1){
    circle(100, 150, 100);
  }
  else if(pos == 2){
    circle(300, 150, 100);
  }
  else if(pos == 3){
    circle(100, 350, 100);
  }
  else if(pos == 4){
    circle(300, 350, 100);
  }
}

function drawTriangle(pos){
  if(pos == 1){
    triangle(100, 100, 50, 200, 150, 200);
  }
  else if(pos == 2){
    triangle(300, 100, 250, 200, 350, 200);
  }
  else if(pos == 3){
    triangle(100, 300, 50, 400, 150, 400);
  }
  else if(pos == 4){
    triangle(300, 300, 250, 400, 350, 400);
  }
}

function drawSquare(pos){
  if(pos == 1){
    square(50, 100, 100);
  }
  else if(pos == 2){
    square(250, 100, 100);
  }
  else if(pos == 3){
    square(50, 300, 100);
  }
  else if(pos == 4){
    square(250, 300, 100);
  }
}

function drawPolygon(pos){
  let angle = random(5, 9);
  if(pos == 1){
    polygon(100, 150, 60, angle);
  }
  else if(pos == 2){
    polygon(300, 150, 60, angle);
  }
  else if(pos == 3){
    polygon(100, 350, 60, angle);
  }
  else if(pos == 4){
    polygon(300, 350, 60, angle);
  }
}

function colorShape(colorOfShape){
  if(colorOfShape == "Red "){
    fill(255, 0, 0);
  }
  else if(colorOfShape == "Blue "){
    fill(0, 0, 255);
  }
  else if(colorOfShape == "Green "){
    fill(0, 255, 0);
  }
  else if(colorOfShape == "Yellow "){
    fill(255, 255, 0);
  }
}





function checkAnswer(q){
  if(answer != q && wrongPrint == false){
      wrong = text("Try Again", 200, 250);
      wrongPrint = true;
      tries++;
    }
    if(answer == q){
      clear();
      check = 0;
      tries++;
      accuracy++;
      levelCount++;
      if(levelCount > 10){
        score(accuracy, tries);
      }
      else{
        level(levelCount);
      }
    }
}

function score(correct, incorrect){
  text(round(correct/incorrect * 100, 2)+ "%", 0, 20, 400);
  backButton();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}



//**********************************************************************
// Exercise 3
//**********************************************************************


function exercise3(){
  exNum = 3;
  clear();
  removeElements();
  background(140);
  check = 2;
  levelCount = 1;
  levelExThree(levelCount);
}

function levelExThree(type){
  background(140);
  fill(200);
  textSize(40);
  answerItemArray = ["Dog", "Cat", "Bird", "Car", "Train"];
  wrongPrint = false;
  
  setItemAnswer();
  placeCorrectItem();
  placeIncorrectItem();
  mousePressed();
  check = 2;
}

function setItemAnswer(){
  var i = int(random(0, 4));
  answer = int(random(1, 3));
  answerItem = answerItemArray[i];
  tutorialText = text("What made the sound?");
  playSound();
}

function playSound(){
  
}

function placeCorrectItem(){
  if(answer == 1){
    img = createImg('', 'dog')
    img.position(50, 300);
  }
  else if(answer == 2){
    img = createImg('', 'dog')
    img.position(250, 300);
  }
}

function placeIncorrectItem(){
  
}



//**********************************************************************
// Functions for all 3 exercises
//**********************************************************************
function mousePressed(){
  if (exNum == 1){
    draw1 = true;
    loop();
  }
 
  if (exNum == 2){
     fill(200);
    if(mouseX > (100 - 100/2) 
        && mouseX < (100 + 100/2) 
        && mouseY > (150 - 100/2) 
        && mouseY < (150 + 100/2) 
        && check == 1){
        checkAnswer(1);
    }

    if(mouseX > (300 - 100/2) 
        && mouseX < (300 + 100/2) 
        && mouseY > (150 - 100/2) 
        && mouseY < (150 + 100/2) 
        && check == 1){
        checkAnswer(2);
    }

    if(mouseX > (100 - 100/2) 
        && mouseX < (100 + 100/2) 
        && mouseY > (350 - 100/2) 
        && mouseY < (350 + 100/2) 
        && check == 1){
        checkAnswer(3);
    }

    if(mouseX > (300 - 100/2) 
        && mouseX < (300 + 100/2) 
        && mouseY > (350 - 100/2) 
        && mouseY < (350 + 100/2) 
        && check == 1){
        checkAnswer(4);
    }

  }
  
  
}
function mouseReleased(){
  if (exNum == 1){
    draw1 = false;
    noLoop();
  }

}
function draw() {
  
  if (exNum == 1 && draw1 == true){
    exercise1();
    let p = createVector(mouseX, mouseY);
    let op = orthogonalProjection(a, b, p);
    let d = p5.Vector.dist(p, op);
    if (20 < d && d <= 100){
      strokeWeight(0);
      fill('red');
      ellipse(op.x, op.y, 20, 20);
      green--;
    }
    
    if (d <= 20){
      strokeWeight(0);
      fill('green');
      ellipse(op.x, op.y, 20, 20);
      green++
    }

  }else if(exNum == 1 && draw1 == false){
    exercise1();
    if (green < -5){
      let text1;
      fill('red');
      text1 = text('tap to try again!', 0, 300, 400, 200);
      backButton();
      green = 0;

    } else if (green > 5){
      let text2;
      fill('green');
      text2 = text('Goodjob!', 0, 300, 400, 200);
      backButton();
      green = 0;
    }
  }
}

