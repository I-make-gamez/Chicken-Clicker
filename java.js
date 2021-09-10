var eggs = 0;

const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  eggs += 1;
  para.innerHTML = "Clicks: " + eggs;
});
