let fname = prompt("Lütfen adınızı girin : ")
let myName = document.querySelector("#myName")
myName.innerHTML = `${fname}`

let clock = document.getElementById('myClock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);