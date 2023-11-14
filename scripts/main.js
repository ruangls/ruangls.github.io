
  let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jyu.jpg") {
    myImage.setAttribute("src", "images/112.jpg");
  } else {
    myImage.setAttribute("src", "images/113.jpg");
  }  
  
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = function () {
    setUserName();
  };