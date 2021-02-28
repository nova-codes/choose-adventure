import React from 'react';
import './style.css';
import plot from '../../../utils/plotbackup'

function Admin(){


  return (
    <div className="dash-container">
      <h1 className="dash-title">ADMIN DASHBOARD</h1>
      {plot.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <p>Choices: </p>
          {item.choices.map((choice) => (
            <p>{choice.text}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Admin;
