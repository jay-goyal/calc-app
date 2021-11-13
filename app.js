let div = document.getElementById("text");
let value = div.innerHTML;

var buttons_gen = document.querySelectorAll(".btn_gen");
var i = 0;
for (i; i < buttons_gen.length; i++) {
  buttons_gen[i].addEventListener("click", function () {
    value += this.innerHTML;
    div.innerHTML = value;
  });
}

var btn_del = document.getElementById("btn_del");
btn_del.addEventListener("click", function () {
  value = value.slice(0, -1);
  div.innerHTML = value;
});

var btn_reset = document.getElementById("btn_reset");
btn_reset.addEventListener("click", function () {
  value = "";
  div.innerHTML = value;
});

var btn_eq = document.getElementById("btn_eq");
btn_eq.addEventListener("click", function () {
  value = value.replace("x", "*");
  value = eval(value);
  div.innerHTML = value;
});
