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
  //1、获取元素
var txt = document.queryselector( "textarea" ) ;var btn = document.querySelector( "button");var ul = document.queryselector("ul" );//2、给button绑定点击事件
btn.onclick = function () {
if (txt.value == ""){//当文本框中没有文字时，提示
alert("您没有输入内容")
}else {
//创建元素Li作为留言区
var li = document.createElement("li");
//将文本框中的内容放到Li中, a标签中href中的内容代表什么都不执行li.innerHTML = txt.value + "<a href='javascript:; '>删除</a>"txt.value =“"";//添加之后文本框的内容清空
//将留言添加到u儿中，而且在最上方
ul .insertBefore(li, ul.children[0]);//当点击删除时删除儿中的Li
var as = document.queryselectorAl1("a" ) ;//循环给每个删除绑定事件
for (var i = e; i < as.length; i++) {
as[i].onclick = function () {
//删除当前a标签所在位置的父节点Liul.removeChild(this.parentNode) ;
}
}
}
}
