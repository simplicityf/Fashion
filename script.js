function pickImage() {
  options = ["style1.jpeg", "style2.jpeg", "col11.png", "col12.jpg", "style3.jpg"];
  randomImg = "img/" + options[Math.floor(Math.random() * options.length)];
  img = document.getElementById("headerimg");
  img.setAttribute("src", randomImg);
  img.setAttribute("alt", "");
}

function show() {
  document.getElementById("show").innerHTML= "Designing is a passion";
document.getElementById("show").style.backgroundColor="deepblue";
  document.getElementById("show").style.display="block";
  document.getElementById("show").style.color="black";
}

function show1() {
  document.getElementById("show1").innerHTML= "Designing is fun";
document.getElementById("show1").style.backgroundColor="whitesmoke";
  document.getElementById("show1").style.display="block";
  document.getElementById("show1").style.color= "green";
}

function show2(element) {
  document.getElementById("show2").style.backgroundColor="deepblue";
  
  document.getElementById("show2").style.backgroundImage= "url(" + element.src + ")";
  
  document.getElementById("show2").innerHTML= element.alt;
  
  document.getElementById("show2").style.display="block";
  
  document.getElementById("show2").style.color="orange";
}

function unshow() {
  document.getElementById('show').style.display='none';
  document.getElementById('show1').style.display='none';
  document.getElementById('show2').style.display='none';
}

/*function setImages() {
  options = [
    "col12.jpg",
    "col13.jpg",
    "col14.jpg",
    "style1.jpeg",
    "style2.jpeg",
    "style3.jpg",
    "col8.jpg",
    "col1.jpg",
    "col2.jpg",
    "col3.jpg",
    "col6.jpg",
    "col7.jpg",
    "col9.jpg",
    "col10.jpg",
    "col11.png",
  ];
  currentImages = document.querySelectorAll(".preview");
  for (let i = 0; i < currentImages.length; i++) {
    console.log("image" + i);
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    currentImages[i].src = randomImg;
    currentImages[i].setAttribute("tabindex", "0");
  }
} */