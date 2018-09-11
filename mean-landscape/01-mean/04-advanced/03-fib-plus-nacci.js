function fib(){
    var num1 = 0;
    var num2 = 1;
    function nacci() {
        var num3 = num1;
        num1 = num2;
        num2 += num3;
        console.log(num2);
    }
    return nacci;
}

var fibCounter = fib();

fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();