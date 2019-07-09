function alert_name() {
  //Create a variable
  var name = "Guzel";
  alert("My name is " + name);
  console.log("Test 123");
}

function change_image() {
  var arts = ["art.jpg", "oc.jpg", "sandy.jpg", "fam.jpg", "snail.jpg"];
  var randomItem = arts[Math.floor(Math.random()*arts.length)];
  var image = document.getElementById('owl1');
  image.src= randomItem;
}
function bigImg(x) {
  x.style.height = "50%";
  x.style.width = "50%";
}
function normalImg(x) {
  x.style.height = "30%";
  x.style.width = "30%";
}
function increase_size() {
  var image = document.getElementById('owl1');
  image.style.width = "50%";
  image.style.length = "50%";
}
function normal_size() {
  var image = document.getElementById('owl1');
  image.style.width = "30%";
  image.style.length = "30%";
}
