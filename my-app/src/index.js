import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import cx from 'classnames';
import './index.css';

function Card(props) {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div
      className={cx('card', { flipped: isFlipped })}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div className="face front"></div>
      <div className="face back"></div>
    </div>
  );
}

function Board(props) {
  return (
    <div className="board">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Game(props) {
  return <Board />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
