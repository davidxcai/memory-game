import React, { Component } from 'react';
import Gif from './Gif';
// import Lose from './Lose';

class GameContainer extends Component {
    state = {
        win: false,
        score: 0,
        gifs: this.props.gifs,
        clicked: ['nothing'],
    }

    reset = () => {
        this.setState({
            score: 0,
            clicked: ['nothing']
        })
    }

    check = event => {
        const selected = event.target.id;
        const clicked = this.state.clicked.includes(selected);
        if (clicked) {
            this.reset();
        } else {
            this.state.clicked.push(selected)
            this.setState(this.props.shuffle(this.state.gifs))
            this.setState({ score: this.state.score + 1 })            
        }
    }

    hello = () => {
        console.log('hello')
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <h1>
                        Score: {this.state.score}/12
                    </h1>
                </div>
                <Gif
                    shuffle={this.props.shuffle}
                    score={this.score}
                    check={this.check}
                    gifs={this.state.gifs}
                />
            </div>
        )
    }
}

export default GameContainer;