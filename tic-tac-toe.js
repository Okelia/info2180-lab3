document.addEventListener("DOMContentLoaded", () => {
    var boxes = document.querySelectorAll("#board div");
    for (var num = 0; num < 9; num ++ ){ 
        boxes[num].classList.add('square');
    }
});