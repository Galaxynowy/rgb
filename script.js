let element1 = document.getElementsByTagName("input")[0];
let element2 = document.getElementsByTagName("input")[1];
let element3 = document.getElementsByTagName("input")[2];
let body = document.getElementById("body");

function range() {
    body.style.background = `rgb(${Math.round(element1.value * 2.55)},${Math.round(element2.value * 2.55)},${Math.round(element3.value * 2.55)}`;
}
