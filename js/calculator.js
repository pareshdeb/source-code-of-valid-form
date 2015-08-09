function allZero(){
    document.calculator.display.value +=0;
}
function allOne(){
    document.calculator.display.value +=1;
}
function allTwo(){
    document.calculator.display.value +=2;
}
function allThree(){
    document.calculator.display.value +=3;
}
function allFour(){
    document.calculator.display.value +=4;
}
function allFive(){
    document.calculator.display.value +=5;
}
function allSix(){
    document.calculator.display.value +=6;
}
function allSeven(){
    document.calculator.display.value +=7;
}
function allEight(){
    document.calculator.display.value +=8;
}
function allNine(){
    document.calculator.display.value +=9;
}
function allSum(){
    document.calculator.display.value +="+";
}
function allSubt(){
    document.calculator.display.value +="-";
}
function allMult(){
    document.calculator.display.value +="*";
}
function allDiv(){
    document.calculator.display.value +="/";
}
function allPoint(){
    document.calculator.display.value +=".";
}
function leftParen(){
    document.calculator.display.value +="(";
}
function rightParen(){
    document.calculator.display.value +=")";
}
function allCancel(){
    document.calculator.display.value ="";
}
function allEquel(){
    var result= eval(document.calculator.display.value);
    document.calculator.display.value = result;
}