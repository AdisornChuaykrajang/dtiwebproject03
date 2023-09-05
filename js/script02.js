//alert("Hi....")
//console.log("bbbbbbbbbb"); console.log(11111)
//console.log(30+20);

//console.log(document.getElementById("num1").value)
//n1 = (document.getElementById("num1").value)
//n2 = (document.getElementById("num2").value)

//alert(parseInt(n1) + parseInt(n2))

function showDti() {
  alert("Welcome to DTI....");
}

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let btnSum = document.getElementById("btSum");
let showsum = document.getElementById("showsum");
let btnCancel = document.getElementById("reset");

btnSum.addEventListener("click", function () {
  let sum = parseFloat(num1.value) + parseFloat(num2.value);
  showsum.innerHTML = sum;
});

btnCancel.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  showsum.innerHTML = "??????";
  document.body.style.backgroundColor = "";
});

let btnRed = document.getElementById("btnRed");
let btnGreen = document.getElementById("btnGreen");
let btnYellow = document.getElementById("btnYellow");

btnRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});
btnGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
btnYellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});
