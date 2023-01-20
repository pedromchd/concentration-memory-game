import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className="card">
      <div className="face front"></div>
      <div className="face back"></div>
    </div>
  );
}

function Board(props) {
  return (
    <div className="board">
      <Card />
    </div>
  );
}

function Game(props) {
  return <Board />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
