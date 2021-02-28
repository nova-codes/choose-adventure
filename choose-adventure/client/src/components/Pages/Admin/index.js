import React from 'react';
import './style.css';
import plot from '../../../utils/plotbackup'

function Admin(){
  const [node, setNode] = React.useState(0);
  var currentNode = plot[node];

  const nodeIncrease = () => {
    setNode(node + 1);
  }

  const nodeDecrease = () => {
    if(node > 0)  
      setNode(node - 1);
    else
      return;
  }

  const targetClick = (choice) => {
    setNode(choice);
  }

  return (
    <div className="dash-container">
      <h1>ADMIN DASHBOARD</h1>
      <div className="btn-div">
        <button className="btn" onClick={nodeIncrease}>+++</button>
        <button className="btn" onClick={nodeDecrease}>---</button>
      </div>
      <h2>Node {node}: {currentNode.title}</h2>
      <p>Content: {currentNode.content}</p>
      <p>Choices: </p>
      {currentNode.choices.map((choice) => (
        <>
          <p>{choice.text}</p>
          <button onClick={() => targetClick(choice.target)}>Target: {choice.target}</button>
        </>
      ))}
    </div>
  );
};

export default Admin;


// <div className="dash-container">
//     <h1 className="dash-title">ADMIN DASHBOARD</h1>
//     {plot.map((item) => (
//       <div>
//         <h2>{item.title}</h2>
//         <p>{item.content}</p>
//         <p>Choices: </p>
//         {item.choices.map((choice) => (
//           <p>{choice.text}</p>
//         ))}
//       </div>
//     ))}
//   </div>