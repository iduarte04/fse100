let playMenu;
let settingMenu;
let exMenu;
let playButton;
let settingButton;
let exButton;
let button;
let ex1, ex2, ex3;

let titleText;



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
  button.mousePressed(setup)
}

//**********************************************************************
// Exercise 1
//**********************************************************************
function exercise1(){
  clear();
  removeElements();
  background(140);
  fill('Black');
  title = text('Trace it!', 0, 20, 400, 200);
  drawLine();
  
}

let line = 0;

function drawLine(){
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  
  while (dist(x1, y1, x2, y2) < 200){
    x1 = random(100, 300);
    x2 = random(100, 300);
    while (x1 == x2)
      x2 = random(100, 300);

    y1 = random(100, 300);
    y2 = random(100, 300);
    while (x1 == x2)
      y2 = random(100, 300);
  }
  strokeWeight(3);
  for(let i = 0.0; i < 1.0; i += 0.05){
    point(lerp(x1, x2, i), lerp(y1, y2, i));
  }
  
}

function pressEvent(){
  
}

function dragEvent(){


}

function releaseEvent(){
  
}

function exercise2(){
  clear();
  removeElements();
  background(140);
  level(1);
}

function level(type){
  let tutorialText = text("Pick the Square", 0, 20, 400);
  if(type == 1){
    square(50, 100, 100);
    circle(300, 150, 100);
    triangle(100, 300, 50, 400, 150, 400);
    polygon(300, 350, 60, 6)
    mousePressed();
  }
}

function mousePressed(){
  if(mouseX > (300 - 100/2) 
      && mouseX < (300 + 100/2) 
  		&& mouseY > (150 - 100/2) 
      && mouseY < (150 + 100/2) ){
    let testText = text("Test", 200, 300);
  }
  if(mouseX > (50 - 100/2) 
      && mouseX < (50 + 100/2) 
  		&& mouseY > (100 - 100/2) 
      && mouseY < (100 + 100/2) ){
    let testText = text("Test", 200, 300);
  }
  if(mouseX > (300 - 100/2) 
      && mouseX < (300 + 100/2) 
  		&& mouseY > (150 - 100/2) 
      && mouseY < (150 + 100/2) ){
    let testText = text("Test", 200, 300);
  }
  if(mouseX > (300 - 100/2) 
      && mouseX < (300 + 100/2) 
  		&& mouseY > (150 - 100/2) 
      && mouseY < (150 + 100/2) ){
    let testText = text("Test", 200, 300);
  }
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


function exercise3(){
  clear();
  removeElements();
  background(140);
}


function draw() {
  
}

