//Through Mouse
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){
       var buttonInnerHTML= this.innerHTML;
       makeSound(buttonInnerHTML);//calling of makeSound function
       makeAnimation(buttonInnerHTML);
    }
}

//Through keyboard
document.addEventListener("keydown",keyPress);
function keyPress(event){
       makeSound(event.key);//calling of makeSound function
       makeAnimation(event.key);
}

//we created a function because through both keyboard and mouse we were using the same switch statement.
function makeSound(key){

    switch(key){
           
        case 'w':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case 'a':
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        
        case 's':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case 'd':
            var tom_1=new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        
        case 'j':
            var tom_2=new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        
        case 'k':
            var tom_3=new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        
        case 'l':
            var tom_4=new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;   
        
        default: alert("You clicked"+key); 
   }
}
//for making Animation
function makeAnimation(currentKey){
    
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(removeAnimation,50);//tells after how many time the first parameter is going to get executed, here 50 is in ms
    function removeAnimation(){
        activeButton.classList.remove("pressed");
    }
}
//this.style.color="white";changes the text color of the button that got clicked