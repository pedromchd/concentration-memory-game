import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className="wrapper">
      <div className={'card ' + (props.isFlipped ? 'flipped' : '')} onClick={props.onClick}>
        <div className="face front"></div>
        <div className="face back"></div>
      </div>
    </div>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Array(24).fill(false),
    };
  }

  handleClick(i) {
    const cards = this.state.cards.slice();
    cards[i] = !cards[i];
    this.setState({ cards: cards });
  }

  renderCard(i) {
    return <Card isFlipped={this.state.cards[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    return (
      <div className="board">
        {this.state.cards.map((value, index) => {
          return this.renderCard(index);
        })}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Game />);
