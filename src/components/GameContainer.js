import React, { Component } from 'react';
import Gif from './Gif';
import StatusBar from './StatusBar';

class GameContainer extends Component {
    state = {
        score: 0,
        gifs: this.props.gifs,
        clicked: ['nothing']
    }

    reset = () => {
        this.setState({
            score: 0,
            clicked: ['nothing']
        })
    }

    scores = (selected, clicked) => {
        if (clicked) {
            this.reset();
            this.setState(this.props.shuffle(this.state.gifs))
        } else {
            this.state.clicked.push(selected)
            this.setState({ score: this.state.score + 1})
            this.setState(this.props.shuffle(this.state.gifs))
        }
    }

    check = event => {
        const selected = event.target.id;
        const clicked = this.state.clicked.includes(selected);
        this.scores(selected, clicked)
    }

    render() {
        return (
            <div className='container'>
                <StatusBar
                    score={this.state.score}
                    handlePageChange={this.props.handlePageChange}
                />
                <Gif
                    check={this.check}
                    gifs={this.state.gifs}
                />
            </div>
        )
    }
}

export default GameContainer;