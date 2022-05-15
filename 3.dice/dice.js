let numberOfDice = 1;

const exampleElementArray = [document.querySelector(".example-element")];

const imagesSource = [
  "./img/dog.jpg",
  "./img/aaron.jpg",
  "./img/fox.jpg",
  "./img/GusDapperton_FirstAid.jpg",
  "./img/luckydaye.jpg",
  "./img/poem.jpg",
  "./img/saanvi-vavilala.jpg",
  "./img/whale.jpg",
];
const diceFace = ["front", "back", "right", "left", "top", "bottom"];
const stopBtn = document.querySelector("#stop-btn");
const makeBtn = document.querySelector("#make-btn");

let i = 0;
let animationFrame;

rotateDice();

function rotateDice() {
  animationFrame = requestAnimationFrame(rotateDice);
  exampleElementArray.forEach((example) => {
    example.style.transform = `rotate3d(1, 1, 1, ${i}deg)`;
  });
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

let diceObj = function (faceLocation, imgLocation, appendChildLocation) {
  const newDiv = document.createElement("div");
  appendChildLocation.appendChild(newDiv);
  const newImg = document.createElement("img");
  newDiv.appendChild(newImg);
  const imgSrc = document.createAttribute("src");
  imgSrc.value = imgLocation;
  newImg.setAttributeNode(imgSrc);
  newDiv.classList.add(faceLocation, "face");
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function makeNewDice() {
  const newWrap = document.createElement("div");
  document.body.appendChild(newWrap);
  numberOfDice += 1;
  newWrap.id = `wrap${numberOfDice}`;
  newWrap.style.position = "absolute";
  newWrap.style.top = `${getRandomIntInclusive(1, 50)}vh`;
  newWrap.style.left = `${getRandomIntInclusive(1, 50)}vw`;
  const newExample = document.createElement("section");
  newWrap.appendChild(newExample);
  newExample.classList.add("example-element");
  exampleElementArray.push(newExample);
  const appendChildLocation = document.querySelector(
    `#wrap${numberOfDice} > section`
  );

  diceFace.forEach((face) => {
    diceObj(
      face,
      imagesSource[getRandomIntInclusive(0, 5)],
      appendChildLocation
    );
  });
}

makeBtn.addEventListener("click", makeNewDice);
