//console log
console.log("welcome to JS");
//Display date on the console
var date = new Date().toLocaleDateString();
console.log(date);
// Display date on the web page using DOM
function  displayTime() {
    var time = new Date().toLocaleDateString();
    document.querySelector('#display').textContent = time;
}
setInterval(displayTime,1000);