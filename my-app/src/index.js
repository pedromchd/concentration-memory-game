import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Card(props) {
  return (
    <div className="wrapper" data-id="1">
      <div className={`card ${props.isFlipped ? 'flipped' : ''}`} onClick={props.onClick}>
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
    return <Card key={i} isFlipped={this.state.cards[i]} onClick={() => this.handleClick(i)} />;
  }

  checkCards() {
    if (this.state.flipped < 2) {
      return null;
    }
    const [card1, card2] = document.getElementsByClassName('flipped');
    if (card1.dataset.id === card2.dataset.id) {
      [card1, card2].forEach((c) => (c.style.animation = 'Success 500ms ease-in-out'));
    } else {
      [card1, card2].forEach((c) => (c.style.animation = 'Failure 500ms ease-in-out'));
    }
    // const cards = this.state.cards.slice();
    // this.setState({
    //   cards: cards.fill(false),
    //   flipped: 0,
    // });
  }

  componentDidMount() {
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
