import React, { Component } from 'react';

class StatusBar extends Component {
    status = () => {
        if (this.props.win === true) {
            return <h1>You win! :)</h1>
        } else if (this.props.win === false) {
            console.log(this.props.score)
            // console.log(this.props.handlePageChange)
            return <h5 className='text-light monster-font'>Score: {this.props.score} | 12</h5>
        }
    }

    changePage = () => {
        this.props.handlePageChange('Search');
    }

    render() {
        return (
            <div className='d-flex justify-content-between align-items-center'>
                {this.status()}
                <button
                    className='btn btn-transparent text-light monster-font'
                    onClick={this.changePage}
                >
                    Home
                    </button>
            </div>
        )
    }
}

export default StatusBar;