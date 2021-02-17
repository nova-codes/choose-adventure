import React from "react";
import plot from "../../utils/plot";
import './style.css';

function Story(){
    console.log(plot);
    var currentNode = plot[0];
    function createChoices(choice) {
        return(
            <button>{choice.text}</button>
        )
    }

    function getCurrentNode() {
        return currentNode;
    }

    function setCurrentNode(targetId) {
        currentNode = plot.find(x => x.id === targetId)
    }

    return(
        <div className="story-div">
            <h2 id="plotTitle"></h2>
            <p id="plotContent"></p>
            <div className="choice-div">
                {plot.choices.map(choice => (
                    <button>{choice.text}</button>
                ))}
            </div>
        </div>
    )
}

export default Story;


// {plot.choices.map(createChoices)}