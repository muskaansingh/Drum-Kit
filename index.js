//to detect mouse click//

noOfDrums = document.querySelectorAll(".drum").length;
    for(let i=0 ; i<noOfDrums ; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            let alpha= this.innerHTML;
            makeSound(alpha);
            btnAnimation(alpha);
        });
    }

    //button animation//

    function btnAnimation(currentKey) {
        let x = currentKey;
        let activeKey = document.querySelector("." + currentKey);
        activeKey.classList.add("pressed");

        setTimeout(() => {
           activeKey.classList.remove("pressed"); 
        },200);
    }

    //for sound effect//

    function makeSound(alpha) {
        switch (alpha) {
            case "a":
                    let tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                break;
            
            case "b":
                    let tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                break;

            case "c":
                    let tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                break;
          
              case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
          
              case "e":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
          
              case "f":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
          
              case "g":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        }
    }

    //detect keyboard press

    
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  btnAnimation(event.key);
});