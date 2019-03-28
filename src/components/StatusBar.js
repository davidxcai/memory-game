import React, { Component } from 'react';

class StatusBar extends Component {
    status = () => {
        if (this.props.score === 12) {
            return <h5 className='text-light monster-font'>You win! :)</h5>
        } else if (this.props.score < 12) {
            console.log('status score: ' + this.props.score)
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
                    Search
                    </button>
            </div>
        )
    }
}

export default StatusBar;