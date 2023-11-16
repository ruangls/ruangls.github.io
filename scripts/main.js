document.querySelector("html").addEventListener("click", () => {
    alert("别戳我，我怕疼。");
  });
  let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/111.jpg") {
    myImage.setAttribute("src", "images/112.gif");
  } else {
    myImage.setAttribute("src", "images/113.jpg");
  }  
  
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.onclick = function () {
    setUserName();
  };