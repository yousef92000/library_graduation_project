let image = document.getElementById('image1');
let myimage = [];
myimage[0]='url(../images/header5.jpg) no-repeat center / cover;';
myimage[1]='url(../images/header4.jpg) no-repeat center / cover;';
myimage[2]='url(../images/header3.jpg) no-repeat center / cover;';
myimage[3]='url(../images/header2.jpg) no-repeat center / cover;';
myimage[4]='url(../images/header1.jpg) no-repeat center / cover;';
myimage[4]='url(../images/header6.jpg) no-repeat center / cover;';
let counter = 0;
function changeBG(){
    image.style = `background:${myimage[counter]};`
    counter++;
    if(counter == myimage.length){
        counter = 0;
    }
}
window.onload = setInterval(changeBG,3000)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let targetDiv = document.getElementById("show");
let btn = document.getElementById("hidden");
btn.onclick = function() {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let btn1 = document.getElementById("close");
btn1.onclick = function() {
  var x = document.getElementById("show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
//////////////////////////////////////////////////////////////
let targetDivTwo = document.getElementById("dash");
let btnTwo = document.getElementById("myInput");

btnTwo.addEventListener("input", () => {
  targetDivTwo.style.display = "block";
})
// onkeyup="myFunction()"
