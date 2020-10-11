document.addEventListener("DOMContentLoaded", () => {
    // Variables 
    let playerOne;
    const xPlayer = "X";
    const oPlayer = "O";
    let boxes = document.querySelectorAll("#board div");
    

    for (let num = 0; num < boxes.length; num++ ){ 
        boxes[num].classList.add('square');
        // allow the user to click the box once
        boxes[num].addEventListener("click", clickFunction, {once: true})
        boxes[num].onmouseover = function (){
            boxes[num].classList.toggle("hover", false)
        }
        boxes[num].onmouseover = function(){
            boxes[num].classList.toggle("hover", true)
        }
    }
    
    function clickFunction(e){
        // cell clicked on will be the target
       
        const currentBox = e.target
        const currentPlayer = playerOne ? oPlayer : xPlayer
        currentBox.classList.add(currentPlayer)
        console.log(currentPlayer.innerHTML)
        currentBox.innerHTML = currentPlayer
        switchPlayer()
       
         
        /** need to fix the hover  */     
        if (playerOne){
            currentBox.classList.add("hover")
        } else{
            currentBox.classList.add("hover")
        }
    }
     /** switch between players */
     function switchPlayer(){
        playerOne = !playerOne
     }
     function mouseOver(){
         document.getElementsByClassName("square O").add("hover");
     }
    
    
});
