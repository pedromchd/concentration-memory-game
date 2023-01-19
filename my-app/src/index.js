import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className="wrapper" data-id="1">
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
      flipped: 0,
    };
  }

  handleClick(i) {
    const flipped = this.state.flipped;
    const cards = this.state.cards.slice();
    if (cards[i]) {
      return null;
    }
    cards[i] = true;
    this.setState({
      cards: cards,
      flipped: flipped + 1,
    });
  }

  renderCard(i) {
    return <Card isFlipped={this.state.cards[i]} onClick={() => this.handleClick(i)} />;
  }

  checkCards() {
    if (this.state.flipped < 2) {
      return null;
    }
    const cards = this.state.cards.slice();
    const flipped = document.querySelectorAll('.flipped');
    if (flipped[0].dataset.id === flipped[1].dataset.id) {
      flipped.forEach((card) => {
        card.style.animation = 'Success 500ms ease-in-out';
      });
      // this.setState({
      //   cards: cards.fill(false),
      //   flipped: 0,
      // });
    }
  }

  componentDidUpdate() {
    if (this.state.flipped < 2) {
      return null;
    }
    const board = document.querySelector('.board');
    board.addEventListener('transitionend', () => this.checkCards());
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
