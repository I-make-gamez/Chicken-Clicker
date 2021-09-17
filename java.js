var eggs = 150;

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


btn.addEventListener("click", function() {
  eggs += cp_pwr;
  para.innerHTML = "Clicks: " + eggs;
});

cpwr.addEventListener("click", function() {
  if(eggs === cp_price){
    eggs -= cp_price;
    para.innerHTML = "Clicks: " + eggs;
    cp_pwr += 1
  }
});

ac.addEventListener("click", function() {
  eggs = eggs
})
