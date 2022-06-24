function display(digit){
    document.getElementById('screen'). innerHTML += digit;
    return digit;
}
function clearscreen(){
    document.getElementById('screen') = '';
}