// alert("linked");
// alert("Clickedddddd");
// var w= document.getElementsByClassName("w drum"); //
// var a= document.getElementsByClassName("a drum");
// var s= document.getElementsByClassName("s drum");
// var d= document.getElementsByClassName("d drum");
// var j= document.getElementsByClassName("j drum");
// var k= document.getElementsByClassName("k drum");
// var l= document.getElementsByClassName("l drum");

// w.addEventListener("click",function(){
//     alert("Click");
//     var tom1 = new Audio('sounds\tom-1.mp3');
//     tom1.play();
// });
// a.addEventListener("click",function(){});
// s.addEventListener("click",function(){});
// d.addEventListener("click",function(){});
// j.addEventListener("click",function(){});
// k.addEventListener("click",function(){});
// l.addEventListener("click",function(){});
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var crash = new Audio('sounds/crash.mp3');
var snare = new Audio('sounds/snare.mp3');
var kickBass= new Audio('sounds/kick-bass.mp3');




document.querySelectorAll("button")[0].addEventListener("click",function(){
    // alert("Clicked-w");
    tom1.play();
});

document.querySelectorAll("button")[1].addEventListener("click",function(){
    tom2.play();
});
document.querySelectorAll("button")[2].addEventListener("click",function(){
    tom3.play();
});
document.querySelectorAll("button")[3].addEventListener("click",function(){
    tom4.play();
});
document.querySelectorAll("button")[4].addEventListener("click",function(){
    crash.play();
});
document.querySelectorAll("button")[5].addEventListener("click",function(){
    snare.play();
});
document.querySelectorAll("button")[6].addEventListener("click",function(){
    kickBass.play();
});

addEventListener("keydown",function(event){
    // alert("Pressed" + event);
    var k =event.key;
    console.log(event);
    switch(k){
        case 'w':
            // this.alert("Clicked wwwwwwwwwww");
            tom1.play();
            document.querySelectorAll("button")[0].style.borderColor= "#fff";
            break;

        case 'a':
            tom2.play();
            document.querySelectorAll("button")[1].style.borderColor= "#fff";
            break;

        case 's':
            tom3.play();
            document.querySelectorAll("button")[2].style.borderColor= "#fff";
            break;

        case 'd':
            tom4.play();
            document.querySelectorAll("button")[3].style.borderColor= "#fff";
            break;
        
        case 'j':
            crash.play();
            document.querySelectorAll("button")[4].style.borderColor= "#fff";
            break;
        
        case 'k':
            snare.play();
            document.querySelectorAll("button")[5].style.borderColor= "#fff";
            break;

        case 'l':
            kickBass.play();
            document.querySelectorAll("button")[6].style.borderColor= "#fff";
            break;
    }
});


addEventListener("keyup",function(event){
       // alert("Pressed" + event);
       var k =event.key;
       console.log(event);
       switch(k){
           case 'w':
               // this.alert("Clicked wwwwwwwwwww");
               document.querySelectorAll("button")[0].style.borderColor= "#404B69";
               break;
   
           case 'a':
            document.querySelectorAll("button")[1].style.borderColor= "#404B69";
               break;
   
           case 's':
               document.querySelectorAll("button")[2].style.borderColor= "#404B69";
               break;
   
           case 'd':
            document.querySelectorAll("button")[3].style.borderColor= "#404B69";
               break;
           
           case 'j':
            document.querySelectorAll("button")[4].style.borderColor= "#404B69";
               break;
           
           case 'k':
            document.querySelectorAll("button")[5].style.borderColor= "#404B69";
               break;
   
           case 'l':
            document.querySelectorAll("button")[6].style.borderColor= "#404B69";
               break;
       }
});
    
