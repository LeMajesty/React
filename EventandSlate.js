import React, { useState } from "react";

import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";


function EightBall({ answers = defaultAnswers }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question.",
    color: "black",
  });

  function handleClick(evt) {
    setAnswer(choice(answers));
  }

  return (
      <div
          className="EightBall"
          onClick={handleClick}
          style={{ backgroundColor: answer.color }}
      >
        <b>{answer.msg}</b>
      </div>
  );
}


export default EightBall;

.EightBall {
  box-shadow: 5px 5px 10px #678;
  margin: 50px;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

import React, { useState } from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice, randInt } from "./random";

const defaultColors = [
  "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
  "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
  "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
];


function BoxesContainer({ allColors = defaultColors, numBoxes = 16 }) {
  const [boxes, setBoxes] = useState(getInitialRandomColors);

  function getInitialRandomColors() {
    return Array.from(
        { length: numBoxes },
        () => choice(allColors));
  }

  function handleClick(evt) {
    setBoxes(boxes => {
      let idx = randInt(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      return boxCopy;
    });
  }

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
      <div>
        <section className="BoxesContainer">{boxComponents}</section>
        <button onClick={handleClick}>Change a Box</button>
      </div>
  );
}


export default BoxesContainer;

import React from "react";
import "./Box.css";


function Box({ color }) {
  return (
      <div
          className="Box"
          style={{ backgroundColor: color }}
      />
  );
}

export default Box;
