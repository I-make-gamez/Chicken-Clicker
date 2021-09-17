var eggs = 0;

//cpwr
var cp_price = 150
var cp_pwr = 1

//ac
var ac_price = 50
var ac_active = false
var ac_cps = 0

const para = document.getElementById("para");
const btn = document.getElementById("btn");
const cpwr = document.getElementsByClassName("cpwr")[0]
const ac = document.getElementsByClassName("cps")[0]
const stats_cpwr = document.getElementById("stats_cpwr");

function loadData() {
  eggs = JSON.parse(localStorage.getItem("clicks"));
  para.innerHTML = `Clicks: ${eggs}`
};

function eraseData() {
  let answer = window.prompt("Are You Sure? This Will Clear ALL Data.", "y/n")
  if(answer = "y") {
    eggs = localStorage.setItem("clicks", 0)
    para.innerHTML = "Clicks: 0"
  }else if(answer = "n") {
    return;
  }
}

btn.addEventListener("click", function() {
  eggs += cp_pwr;
  para.innerHTML = "Clicks: " + eggs;
  localStorage.setItem("clicks", eggs)
});

cpwr.addEventListener("click", function() {
  if(eggs === cp_price){
    eggs -= cp_price;
    para.innerHTML = "Clicks: " + eggs;
    cp_pwr += 1
    stats_cpwr.innerHTML = "Clickpower: " + cp_pwr;

  }
});

ac.addEventListener("click", function() {
  eggs = eggs
})
