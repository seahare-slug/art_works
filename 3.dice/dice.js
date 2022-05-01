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
