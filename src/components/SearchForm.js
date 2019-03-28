import React from 'react';
import Jumbotron from './Jumbotron';

function SearchForm(props) {
    return (
        <div className='container'>
        <Jumbotron />
            <div className='form-group'>
            <label htmlFor='search'>Search</label>
            <input 
                onChange={props.handleInputChange}
                value={props.search}
                name='search'
                type='text'
                className='form-control rounded-pill'
                placeholder='Search for gifs...'
                id='search'
            />
            <button 
            onClick={props.handleFormSubmit}
            className='btn btn-dark rounded-pill mt-3'
            >
                Search
            </button>
        </div>
        </div>
    )
}

export default SearchForm;