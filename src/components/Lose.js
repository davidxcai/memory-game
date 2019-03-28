import React, { Component } from 'react';

class Lose extends Component {
    render() {
        return (
            <div className='container d-flex justify-content-center'>
                <button
                    className='btn btn-info'
                    onClick={this.props.reset()}
                    >
                    Try Again
                </button>
                <button
                    className='btn btn-warning'
                    // onClick={this.props.handlePageChange('Search')}
                    >
                    Search New Gifs
                </button>
            </div>
            // <div>
            //     <h1>
            //         You lose
            //     </h1>
            // </div>
        )
    }
}

export default Lose;