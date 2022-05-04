const example = document.querySelector("#example-element");
const stopBtn = document.querySelector("button");

let i = 0;
let animationFrame;

rotateDice();

function rotateDice() {
  animationFrame = requestAnimationFrame(rotateDice);

  example.style.transform = `rotate3d(1, 1, 1, ${i}deg)`;
  i++;
}

function handleAnimationFrame() {
  if (stopBtn.innerText === "STOP") {
    cancelAnimationFrame(animationFrame);
    stopBtn.innerText = "RESUME";
  } else {
    rotateDice();
    stopBtn.innerText = "STOP";
  }
}

stopBtn.addEventListener("click", handleAnimationFrame);

let diceObj = function (faceLocation, imgLocation) {
  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  newDiv.appendChild(newImg);
  const imgSrc = document.createAttribute("src");
  imgSrc.value = imgLocation;
  newImg.setAttributeNode(imgSrc);
  newDiv.classList.add(faceLocation, "face");
  example.appendChild(newDiv);
};

diceObj("front", "./img/dog.jpg");
