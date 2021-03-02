import React from "react";
import plot from "../../../utils/plotbackup";
import "./style.css";

function Story() {
  const [node, setNode] = React.useState(0);
  const [target, setTarget] = React.useState(plot[0].target);

  var currentNode = plot[node];

  function getCurrentNode() {
    return currentNode;
  }

  function setCurrentNode(targetId) {
    currentNode = plot.find((x) => x.id === targetId);
    return currentNode;
  }

  function onClick(choice) {
    console.log(choice.text);
    console.log("Target: " + choice.target);
    setNode(choice.target);
    setCurrentNode(choice.target);
    console.log(currentNode);
    setTarget(currentNode.id);
    getCurrentNode();
    // console.log(choice.text);
    // console.log("Target ID: " + choice.target);
    // setCurrentNode(choice.target);
  }

  return (
    <div className="story-div">
      <h2 id="plotTitle">{currentNode.title}</h2>
      <img id="plotImage" src="{currentNode.image}" />
      <p id="plotContent">{currentNode.content}</p>
      <div className="choice-div">
        {currentNode.choices.map((choice) => (
          <button
            value={choice.id}
            className="userChoice-btn"
            onClick={() => onClick(choice)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Story;

// {plot.choices.map(createChoices)}
//
// have to set state for the target node
// when you click the button, will have an on-click event
// which changes the current node id to the target node id
// for the choice you selected.
// when the state changes, the component will re-render
// showing the data for the id number equal to the target number.
