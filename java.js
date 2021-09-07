var eggs = 0;
var eps = 0;

const click = document.getElementById("click");
const egg = document.getElementById("clicks");

click.addEventListener("click", function(){
    eggs += 1;
    egg.innerHTML = "Eggs: " + eggs
});