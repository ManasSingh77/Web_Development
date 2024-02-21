// SET-4 
//QUESTION -1 - Error is at argument of greetInner and also greetFunct = greet, should be greet();
function greet() {
    let greeting = 'Hello';
    function greetInner(name) {
     console.log(greeting + ', ' + name + '!');
    }
    return greetInner;
    }
    let greetFunc = greet();
    greetFunc('Alice');

//QUESTION-2 - Error is in calling of innerFunc() correct calling should be innerFunc.

function outerFunction() {
    var outerVar = "I'm in the outer function";
    function innerFunction() {
    console.log(outerVar);
    }
   innerFunction()
   }
   var innerFunc = outerFunction();
   innerFunc;
    