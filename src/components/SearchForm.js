import React from 'react';
import Jumbotron from './Jumbotron';

function SearchForm(props) {
    return (
        <div className='container'>
        <Jumbotron 
        handleInputChange={props.handleInputChange}
        search={props.search}
        handleFormSubmit={props.handleFormSubmit}
        />
        </div>
    )
}

export default SearchForm;