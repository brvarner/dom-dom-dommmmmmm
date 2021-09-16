let btnLabel = document.createElement("label");
let btn = document.createElement("button");
btnLabel.textContent = "Add Square";
btnLabel.style.font - "sans-serif";
document.body.appendChild(btnLabel);
document.body.appendChild(btn);

btnLabel.style.display = "flex";
btn.style.padding = "2em 3em";
btn.style.position = "relative";
btn.style.margin = "2em 2em";
btn.style.justifyContent = "center";

let divBox = document.createElement("div");
divBox.className = "div-box";
divBox.style.margin = "0";
divBox.style.display = "flex";
divBox.style.flexWrap = "wrap";
document.body.appendChild(divBox);

let addDiv = function () {
  let newSquare = document.createElement("div");
  newSquare.className = "square";
  divBox.appendChild(newSquare);

  let squareStyle = divBox.getElementsByClassName("square");

  let idCount = 1;

  let idIncrement = function () {
    idCount++;
  };

  for (i = 0; i < squareStyle.length; i++) {
    squareStyle[i].style.padding = "1em 1em 1em 1em";
    squareStyle[i].style.border = "1px solid black";
    squareStyle[i].id = idCount;
    idIncrement();
  }

  let squareText = document.createElement("p");
  let idText = document.createTextNode(newSquare.id);
  squareText.appendChild(idText);
  squareText.className = "square-text";
  newSquare.appendChild(squareText);
  squareText.style.opacity = 0;
  squareText.style.fontSize = "5em";
  squareText.style.margin = "0 .25em 0 .25em";

  let hover = function () {
    squareText.style.opacity = 1;
  };

  let noHover = function () {
    squareText.style.opacity = 0;
  };

  squareText.addEventListener("mouseenter", hover);
  squareText.addEventListener("mouseleave", noHover);

  let colors = [
    "lightPink",
    "lightSkyBlue",
    "maroon",
    "mediumAquaMarine",
    "mediumSlateBlue",
    "orangeRed",
    "peru",
    "peachPuff",
  ];

  let backgroundChange = function (e) {
    let randomColor = Math.floor(Math.random() * colors.length);
    e.target.style.backgroundColor = colors[randomColor];
  };

  newSquare.addEventListener("click", backgroundChange);

  let eraser = function (e) {
    if (e.target.id % 2 === 0) {
      e.target.nextSibling.remove();
    } else if (e.target.previousSibling === null) {
      alert("There are no squares before this one!");
    } else if (e.target.nextSibling === null) {
      alert("There is no square after this one!");
    } else {
      e.target.previousSibling.remove();
    }
  };

  newSquare.addEventListener("dblclick", eraser);
};

btn.addEventListener("click", addDiv);
