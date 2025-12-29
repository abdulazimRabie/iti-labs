document.getElementById("mathBtn").onclick = function() {
    var expression = prompt("Let's evaluate Your math expression: ");
    console.log(eval(expression));
}

// Eval is a really dangrous function
// Remember that user can execute JS code if he enterd `console.log` for example