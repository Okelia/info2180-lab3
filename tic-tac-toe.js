document.addEventListener("DOMContentLoaded", () => {
    // Variables 
    let playerOne;
    const xPlayer = "X";
    const oPlayer = "O";
    let boxes = document.querySelectorAll("#board div");
    const WINIING =[
        [0, 1, 2],  [3, 4, 5],  [6, 7, 8], 
        [0, 3, 6],  [1, 4, 7],  [2, 5, 8],  
        [0, 4, 8],  [2, 4, 6]
    ]
    

    for (let num = 0; num < boxes.length; num++ ){ 
        boxes[num].classList.add('square');
        // allow the user to click the box once
        boxes[num].addEventListener("click", clickFunction, {once: true})
        boxes[num].onmouseover = function (){
            boxes[num].classList.toggle("hover", true)
        }
        boxes[num].onmouseout = function(){
            boxes[num].classList.toggle("hover", false)
        }
    }
    
    function clickFunction(e){
        // cell clicked on will be the target
       
        const currentBox = e.target
        const currentPlayer = playerOne ? oPlayer : xPlayer
        currentBox.classList.add(currentPlayer)
        console.log(currentPlayer.innerHTML)
        currentBox.innerHTML = currentPlayer
        if (playerWon(currentPlayer)){
            document.getElementById("status").className="you-won";
            document.getElementById("status").innerHTML= "Congratulations! " + currentPlayer + " is the Winner";
        }
        switchPlayer()
       
         
   
    }
     /** switch between players */
     function switchPlayer(){
        playerOne = !playerOne
     }

     function playerWon(currentPlayer){
        return WINIING.some(combination => {
            return combination.every(index => {
                return boxes[index].classList.contains(currentPlayer)
            })
        })
     }
     
    
    
});
