function addSymbol(x){
    let input = document.getElementById('input');
    input.value += x.value;
}
function reset(){
    let input = document.getElementById('input');
    input.value = "";
}
function result(){
    let input = document.getElementById('input');
    output = eval(input.value);
    input.value = output;
}
function cross(){
    let input = document.getElementById('input');
    var output = input.value.substr(0,input.value.length-1);
    input.value = output;
}