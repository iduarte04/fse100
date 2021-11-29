let playMenu;
let settingMenu;
let exMenu;
let playButton;
let settingButton;
let exButton;
let button;
let slider1, slider2, slider3;
let checkbox1, checkbox2, checkbox3;
let checked1 = false, checked2 = false, checked3 = false;
let ex1, ex2, ex3;
let exNum;
let titleText;
let volume;
let inSetting = false;


//variables for ex1
let lvl = 0, a, b, line1, draw1 = false; 
let ex1Score, green = 0, totalCircle = 0;
let lineNum = 0;

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
let i;
let lvl3;
let trials = 0;
let correct = 0;
let wrongPrint1 = false;
let answerItemArray;
let answerItem;

//sound variables
let playCorrect = false, playWrong = false, playdogBark = false;

//image variables
let dogImage, catImage, birdImage, carImage, trainImage, jpg;
let gifPlay = false;
//sound variables
let dogBark, catMeow, birdSound, carSound, trainSound;
//preload sound and image files
function preload() {
  dogImage = loadImage("dogImage.jpg");
  dogBark = createAudio("dogBark.mp3");
  catImage = loadImage("catImage.jpg");
  catMeow = createAudio("catMeow.mp3");
  birdImage = loadImage("birdImage.jpg");
  birdSound = createAudio("birdSound.mp3");
  carImage = loadImage("carImage.jpg");
  carSound = createAudio("carSound.mp3");
  trainImage = loadImage("trainImage.jpg");
  trainSound = createAudio("trainSound.mp3");
  correctSound = loadSound("correct.mp3");
  wrongSound = loadSound("wrong.mp3");
  cheering = createAudio("cheering.mp3");
  jpg = loadImage("jpg.jpg");
}

function setup() {
  inSetting = false;
  cheering.stop();
  exNum = 0;
  lvl = 0;
  
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
  loop();
  inSetting = true;
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
  
  slider1 = createSlider(0, 100, 50);
  slider1.position(120, 185);
  
  checkbox1 = createCheckbox('Mute', checked1);
  checkbox1.position(280, 185);
  
  textSize(20);
  text('Master Audio', 50, 240);
  
  slider2 = createSlider(0, 100, 50);
  slider2.position(170, 225);
  slider2.style('width', '80px');
  
  checkbox2 = createCheckbox('Mute', checked2);
  checkbox2.position(280, 225);
  
  let text3;
  textSize(20);
  text3 = text('Sound Effect', 50, 280);
  
  slider3 = createSlider(0, 100, 50);
  slider3.position(170, 265);
  slider3.style('width', '80px');
  
  checkbox3 = createCheckbox('Mute', checked3);
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
  fill('orange');
  textSize(48);
  title = text('Trace it!', 0, 20, 400, 200);
  if (lvl == 0)
    drawLine(120, 350, 96, 298);
  else if (lvl == 1)
    drawLine(70, 400, 196, 298);
  else if (lvl == 2)
    drawLine(160, 190, 80, 299);
  else if (lvl == 3){
    clear();
    background(250);
    draw1 = false;
    exNum = 0;
    fill('red');
    text('Congratulations!', 0, 50, 400, 200);
    image(jpg, 70, 120);
    cheering.play();
    backButton();
  }
    
    
  
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
    fill('violet');
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

function nextButton(){
  
  button = createButton('Next');
  button.size(140, 50);
  button.position(260, 450);
  let col = color('#545453');
  button.style('background-color', col).style('border','none')
  .style('color', 'white').style('padding','15px 48px').style('text-align',           'center').style('text-decoration', 'none').style('display','inline-block').style('font-  size','16px');
  button.mousePressed(nextLevel);
}
  
function nextLevel(){
  correctSound.stop();
  lvl++;
  exercise1();
}

//**********************************************************************
// Exercise 2
//**********************************************************************
function exercise2(){
  exNum = 2;
  clear();
  removeElements();
  accuracy = 0;
  tries = 0;
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
  correctSound.stop();
  wrongSound.stop();
  if(answer != q && wrongPrint == false){
      wrong = text("Try Again", 200, 250);
      wrongPrint = true;
      if (!checked2 && !checked3)
        wrongSound.play();
      tries++;
    }
    if(answer == q){
      clear();
      check = 0;
      if (!checked2 && !checked3)
        correctSound.play();
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
  let ex2Score = round(correct/incorrect * 100, 2);
  fill('red');
  text('Congratulations!', 0, 100, 400, 200);
  cheering.play();
  fill('black');
  textSize(30);
  text('Your Score is : ' + ex2Score + '%', 0, 150, 400, 200);
  image(jpg, 50, 200);
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
  trials = 0;
  correct = 0;
  lvl3 = 1;
  levelExThree(lvl3);

  
}

function levelExThree(type){
  background(140);
  fill(200);
  textSize(40);
  answerItemArray = ["Dog", "Cat", "Bird", "Car", "Train"];
  wrongPrint1 = false;
  
  setItemAnswer();
  placeCorrectItem();
  placeIncorrectItem();
  check = 2;
}

function setItemAnswer(){
  i = int(random(0, 5));
  answer = int(random(1, 4));
  answerItem = answerItemArray[i];
  //text("Listen!", 0, 50, 400, 400);
  if (trials > 0){
    if (answerItem == "Dog")
      dogBark.play();
    else if (answerItem == "Cat")
      catMeow.play();
    else if (answerItem == "Bird")
      birdSound.play();
    else if (answerItem == "Car")
      carSound.play();
    else if (answerItem == "Train")
      trainSound.play();  
  }
 
  fill('blue');
  tutorialText = text("What made the sound?", 0, 50, 400, 400);
}

function wait(time){
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}

function placeCorrectItem(){
  let imageArray = [dogImage, catImage, birdImage, carImage, trainImage]
  if(answer == 1){
    image(imageArray[i], 50, 300);
  }
  else if(answer == 2){
    image(imageArray[i], 250, 300);
  }
  else if(answer == 3){
    image(imageArray[i], 150, 100);  
  }
}

function placeIncorrectItem(){
  let j, k;
  let imageArray = [dogImage, catImage, birdImage, carImage, trainImage]
  do{
    j = int(random(0,5));
    k = int(random(0,5));
  }while(j == i || k == j || k == i);
  
    
  if(answer == 1){
    image(imageArray[j], 250, 300);
    image(imageArray[k], 150, 100);
  }
  else if(answer == 2){
    image(imageArray[j], 50, 300);
    image(imageArray[k], 150, 100);
  }
  else if(answer == 3){
    image(imageArray[j], 250, 300);
    image(imageArray[k], 50, 300);
  }
}

function checkAnswer2(q){
  correctSound.stop();
  wrongSound.stop();
  
  if (wrongPrint1 == false){
    if (answerItem == "Dog")
      dogBark.stop();
    else if (answerItem == "Cat")
      catMeow.stop();
    else if (answerItem == "Bird")
      birdSound.stop();
    else if (answerItem == "Car")
      carSound.stop();
    else if (answerItem == "Train")
      trainSound.stop();
    if (trials > 0){
      correctSound.stop();
    }
  }
  
  if(trials == 0){
    clear();
    
    lvl3++;
    trials++;
    correct++;
    levelExThree(lvl3)
    
  }else if(answer != q && wrongPrint1 == false){
    stroke(30);
    fill('red');
    text("Try Again", 200, 270);
    wrongPrint1 = true;
    if (!checked2 && !checked3)
      wrongSound.play();
    trials++;
  }
  else if(answer == q){
    clear();
    check = 0;
    if (!checked2 && !checked3)
      correctSound.play();
    trials++;
    correct++;
    lvl3++;
    if(lvl3 > 10){
      score(correct, trials);
    }
    else{
      levelExThree(lvl3);
    }
  }
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
  if (exNum == 3){
    if(mouseX > (50 - 100/2) 
        && mouseX < (50 + 100) 
        && mouseY > (300 - 100) 
        && mouseY < (300 + 100) 
        && check == 2){
        checkAnswer2(1);

    }

    if(mouseX > (250 - 100/2) 
        && mouseX < (250 + 100) 
        && mouseY > (300 - 100) 
        && mouseY < (300 + 100) 
        && check == 2){
        checkAnswer2(2);

    }

    if(mouseX > (150 - 100/2) 
        && mouseX < (150 + 100) 
        && mouseY > (100 - 100) 
        && mouseY < (100 + 200) 
        && check == 2){
        checkAnswer2(3);

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
  if (inSetting){
    volume = slider1.value()/100;
    cheering.volume(volume);
    dogBark.volume(volume);
    catMeow.volume(volume);
    birdSound.volume(volume);
    carSound.volume(volume);
    trainSound.volume(volume);
    
    if (checkbox3.checked()){
      checked3 = true;
      cheering.volume(0);
    }else{
      checked3 = false;
      cheering.volume(volume);
    }
      
    if (checkbox2.checked()){
      checked2 = true;
      cheering.volume(0);
      dogBark.volume(0);
      catMeow.volume(0);
      birdSound.volume(0);
      carSound.volume(0);
      trainSound.volume(0);
    }else{
      checked2 = false;
      cheering.volume(volume);
      dogBark.volume(volume);
      catMeow.volume(volume);
      birdSound.volume(volume);
      carSound.volume(volume);
      trainSound.volume(volume);
    }
    
  }
  
  if (exNum == 1 && draw1 == true){
    exercise1();
    let p = createVector(mouseX, mouseY);
    let op = orthogonalProjection(a, b, p);
    let d = p5.Vector.dist(p, op);
    if (10 < d && d <= 100){
      strokeWeight(0);
      fill('red');
      ellipse(op.x, op.y, 20, 20);
      totalCircle++;
      green--;
    }
    
    if (d <= 10){
      strokeWeight(0);
      fill('green');
      ellipse(op.x, op.y, 20, 20);
      totalCircle++;
      green++
    }

  }else if(exNum == 1 && draw1 == false){
    exercise1();
    if (totalCircle > 20){
      textSize(30);
      ex1Score = round(100*((totalCircle + green)/2)/totalCircle, 2);
      text('Your Score is : ' + ex1Score + '%', 0, 300, 400, 200);
      if (ex1Score < 60){
        let text1;
        fill('red');
        text1 = text('tap to try again!', 0, 370, 400, 200);
        if (!checked2 && !checked3)
          wrongSound.play();
        backButton();
        green = 0;
        totalCircle = 0;

      } else if (ex1Score >= 60){
        let text2;
        fill('green');
        text2 = text('Goodjob!', 0, 370, 400, 200);
        if (!checked2 && !checked3)
          correctSound.play();
        backButton();
        nextButton();
        green = 0;
        totalCircle = 0;
      }
    }
    
  }
}

