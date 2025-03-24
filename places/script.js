//define the array of images
const images =["./resources/images/titwala.jfif","./resources/images/tmandir2.jpg","./resources/images/tmandir.jpg"];

//initialise the index
let currentIndex = 0; 

//get referance to html elsement
const imgElement = document.getElementById("image");
const preImg = document.getElementById("preImg");
const nextImg = document.getElementById("nextImg");

//function to update te displayed img
function updateImg(){
    imgElement.src = images[currentIndex];
}

//event listner for next img
nextImg.addEventListener("click",function(){
    currentIndex = (currentIndex + 1) % images.length;
    updateImg();
})

//event listner for previous img
preImg.addEventListener("click",function(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImg();
})

//initial update
updateImg();