import React, { useState } from "react";
import plot from "../../utils/plot";
import './style.css';

function Story(props){
    const [count, setCount] = useState(0);

    function nextStep(){
        setCount(count + 1);
    }

    function prevStep(){
        setCount(count - 1);
    }

    return(
        <div className="story-div">
            <h2 id="plotTitle">{plot[count].title}</h2>
            <p id="plotContent">{plot[count].content}</p>
            <div className="choice-div">
                <button onClick={nextStep} className="btn-light btn choice-btn">{plot[count].choice1}</button>
                <button onClick={prevStep} className="btn-light btn choice-btn">{plot[count].choice2}</button>
            </div>
        </div>
    )
}

export default Story;