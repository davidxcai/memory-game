import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import GameContainer from './components/GameContainer';
import API from './utils/API';
import Footer from './components/Footer';

class App extends Component {

  state = {
    gifs: [],
    currentPage: 'Search',
    search: ''
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return { gifs: a };
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.search)
    .then(results => {
      if (results.data.data.length < 12) {
        alert('Not enough gifs');
      } else {
        this.setState({ gifs: results.data.data })
        this.handlePageChange('Game')
      }
    })
    .catch(err => console.log(err));
  }

  // Conditional rendering determines which page to load based on currentPage
  renderPage = () => {
    if (this.state.currentPage === 'Search') {
      return <SearchForm 
      search={this.state.search}
      handlePageChange={this.handlePageChange}
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
      />
    } else if (this.state.currentPage === 'Game') {
      return <GameContainer 
      handlePageChange={this.handlePageChange}
      gifs={this.state.gifs}
      shuffle={this.shuffle}
      />
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default App;
