let slider = document.getElementById("slideSelector");
let range = document.getElementsByClassName("slideValue")[0];
range.innerHTML = slider.value;
let screen = document.getElementsByClassName("screen")[0];
let selection = document.getElementById('selection');
setScreen();
let randomColor


slider.addEventListener("input", function () {
    clearScreen(); 
    range.innerHTML = slider.value;
    setScreen() });
setSelection(2);
screen.addEventListener('mouseover', function(event) {
    draw(event)})
    
let li = document.getElementsByClassName('item');

//  BUTTON EVENTS

    let colorBtn = document.getElementById('color');
    let eraseBtn = document.getElementById('erase');
    let drawBtn = document.getElementById('draw');
    let clearBtn = document.getElementById('reset')
    
    eraseBtn.addEventListener('click', function (){ 
        setSelection(1);
        screen.addEventListener('mouseover', function(event){
        erase(event)})})

    colorBtn.addEventListener('click', function () { 
        setSelection(3);
        screen.addEventListener('mouseover', function (event) {
        colorize(event)})})
        
            
    drawBtn.addEventListener('click', function(){
        setSelection(2);
        screen.addEventListener('mouseover', function (event) {
        draw(event)})})
                    
    clearBtn.addEventListener('click', function (){
        clearScreen(); 
        range.innerHTML = slider.value;
        setScreen();
        setSelection(2);
        screen.addEventListener('mouseover', function(event) {
        draw(event);})})
            
        

//  FUNCTIONS

function setSelection(selector){
    if (selector == 1){selection.innerHTML = 'Mode:  Erase'};
    if (selector == 2){selection.innerHTML = 'Mode:  Draw'};
    if (selector == 3){selection.innerHTML = 'Mode:  Colorful'};}

function erase(event) {
    if (event.target.classList.contains('item')) {
        event.target.classList.remove('hovered');
        event.target.classList.remove('colored');
        setSelection(1)}}
                        
function colorize(event){            
    randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.documentElement.style.setProperty('--main-bg-color', randomColor);
    if (event.target.classList.contains('item')) {
        event.target.classList.remove('hovered');
        event.target.classList.add('colored');
        setSelection(3)};
    }
        
function draw(event){
    if (event.target.classList.contains('item')) {
        event.target.classList.remove('colored');
        event.target.classList.add('hovered');        
        setSelection(2)}}
        
function resetScreen(){
    clearScreen(); 
    range.innerHTML = slider.value;
    setScreen();
    screen.addEventListener('mouseover', function(event) {
        draw(event);})}
                
function clearScreen() {
    while (screen.firstChild){
    screen.removeChild(screen.firstChild);}}

function setScreen(){
    for (i=0; i< (slider.value); i++) {
        const ul = document.createElement('ul');
        ul.className = 'column';
        screen.append(ul);
        frag = document.createDocumentFragment();
            for (j=0; j<(slider.value); j++) {
                const li = document.createElement('li');
                li.className = ('item');
                li.classList.add(String(j))
                li.classList.add("column:_"+String(i));
                frag.appendChild(li);}
        last = screen.lastElementChild
        last.appendChild(frag);
        }}
                    

