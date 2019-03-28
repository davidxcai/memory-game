import React, { Component } from 'react';
import Gif from './Gif';
import StatusBar from './StatusBar';

class GameContainer extends Component {
    state = {
        win: false,
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
            // this.setState(this.props.shuffle(this.state.gifs))
        } else {
            this.state.clicked.push(selected)
            // this.setState(this.props.shuffle(this.state.gifs))
            this.setState({ score: this.state.score + 1 })
            console.log('in scores: ' + this.state.score)
        }
    }

    check = event => {
        const selected = event.target.id;
        const clicked = this.state.clicked.includes(selected);
        this.scores(selected, clicked)
        console.log('after scores: ' + this.state.score);
        if (this.state.scores === 12) {
            this.setState({ win: true })
        }
    }

    render() {
        return (
            <div className='container'>
                <StatusBar
                    win={this.state.win}
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