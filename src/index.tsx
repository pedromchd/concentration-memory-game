import React from 'react';
import ReactDOM from 'react-dom/client';
import cx from 'classnames';
import './index.scss';

function Game(props: any) {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Game />);
