import React from 'react';
import './style.css';
import plot from '../../../utils/plotbackup'
import {Dropdown} from 'react-bootstrap';

function Admin(){
  const [node, setNode] = React.useState(0);
  var currentNode = plot[node];

  const nodeIncrease = () => {
    if(node < plot.length - 1)
      setNode(node + 1);
    else
      return;
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

  const lastNode = () => {
    let nodeLength = plot.length - 1;
    setNode(nodeLength);
  }

  const handleSelect = e => {
    setNode(e);
    console.log("Node: " + currentNode);
  }

  return (
    <div className="dash-container">
      <h1>ADMIN DASHBOARD</h1>
      <div className="dropdown-div">
        <Dropdown>
          <Dropdown.Toggle variant="light" className="dropdown" id="dropdown-basic">
            Select a node
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {plot.map((plotNode) => (
              <Dropdown.Item onSelect={handleSelect} eventKey={plotNode.id}>{plotNode.id}: {plotNode.title}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="btn-div">
        <button className="btn" onClick={() => setNode(0)}>{"<<"}</button>
        <button className="btn" onClick={nodeDecrease}>-1</button>
        <button className="btn" onClick={nodeIncrease}>+1</button>
        <button className="btn" onClick={lastNode}>{">>"}</button>
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