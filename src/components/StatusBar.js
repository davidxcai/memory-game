import React, { Component } from 'react';

class StatusBar extends Component {
    status = () => {
        if (this.props.win) {
            return <h1>You win! :)</h1>
        } else if (this.props.win === false) {
            return <h3 className='text-light'>Score: {this.props.score} | 12</h3>
        }
    }

    render() {
        return (
            <div className='d-flex justify-content-between'>
                {this.status()}
                <button
                    className='btn btn-transparent text-light'
                    // onClick={this.props.handlePageChange('Search')}
                >
                    Home
                    </button>
            </div>
        )
    }
}

export default StatusBar;