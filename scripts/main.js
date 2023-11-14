let laoda = "牢大"
alert("确定复活牢大!");
document.querySelector("html").addEventListener("click", () => {
    alert("别戳我，我怕疼。");
  });
  let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jyu.jpg") {
    myImage.setAttribute("src", "images/112.jpg");
  } else {
    myImage.setAttribute("src", "images/113.jpg");
  }  
  
}
