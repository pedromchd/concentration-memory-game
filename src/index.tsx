import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import cx from 'classnames';
import './index.scss';

function Card(props: {}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={cx('card', { toward: active })}
      onClick={() => setActive(!active)}
    >
      <div className="face front"></div>
      <div className="face back"></div>
    </div>
  );
}

function Board(props: {}) {
  return (
    <div>
      <Card />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Board />);
