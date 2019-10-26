import { firstArr } from "./data/4x4.js";
import { secondArr } from "./data/32x32.js";
function firstPrint(){
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0,0,512,512);
  const scale = 128;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      ctx.fillStyle = "#" + firstArr[i][j];
      ctx.fillRect(i*scale,j*scale, (i+1)*scale, (j+1)*scale);
    }
  }
}

function secondPrint(){
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0,0,512,512);
  const scale = 16;
  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
      ctx.fillStyle = "rgba(" + secondArr[i][j][0] + "," + secondArr[i][j][1] + "," + secondArr[i][j][2] + "," + secondArr[i][j][3]/255 + ")";
      ctx.fillRect(i*scale,j*scale, (i+1)*scale, (j+1)*scale);
    }
  }
}

function thirdPrint(){
  let ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0,0,512,512);
  let image = new Image();
  image.src = "data/image.png";
  image.onload = function(){
    ctx.drawImage(image,0,0,512,512)
  }
}
function firstClick(){
  document.querySelector(".right__size-list > div:nth-child(1)").addEventListener('click', firstPrint)
}
function secondClick(){
  document.querySelector(".right__size-list > div:nth-child(2)").addEventListener('click', secondPrint)
}
function thirdClick(){
  document.querySelector(".right__size-list > div:nth-child(3)").addEventListener('click', thirdPrint);
}
firstClick();
secondClick();
thirdClick();
