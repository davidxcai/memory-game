import React from 'react';

function Jumbotron(props) {
    return (
        <div className='jumbotron rounded-0 text-light'>
            <h1>Gif Memory Game</h1>
            <p>
                Rules: Don't click on a gif more than once!
            </p>
            <hr />
            <div className='form-group mt-4 mb-0'>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name='search'
                    type='text'
                    className='form-control border-top-0 border-left-0 border-right-0 rounded-0 border-secondary text-center text-light'
                    placeholder='Search for gifs...'
                    id='search'
                />
                <button
                    onClick={props.handleFormSubmit}
                    className='btn btn-transparent text-light rounded-0 mt-3 mb-0'
                >
                    Search
            </button>
            </div>
        </div>
    )
}

export default Jumbotron;