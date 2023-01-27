import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import cx from 'classnames';
import './index.css';

function Card(props) {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <div
      className={cx('card', { flipped: isFlipped })}
      onClick={props.onClick}
    >
      <div className="face front">{props.value}</div>
      <div className="face back"></div>
    </div>
  );
}

function Board(props) {
  const [pairs, setPairs] = useState([1, 2, 3]);

  useEffect(() => {
    const values = pairs.concat(pairs);
    setPairs(values.sort((a, b) => 0.5 - Math.random()));
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 2) {
      alert('a');
      return setCount(0);
    }
  }, [count]);

  return (
    <div className="board">
      {pairs.map((value) => (
        <Card value={value} onClick={() => setCount(count + 1)} />
      ))}
    </div>
  );
}

function Game(props) {
  return <Board />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
