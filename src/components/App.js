import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 22915a743e2b4f7ddfa2baa3289830479b438ead0092fc606eea5fa48fcc6ec4'
      }
    });
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
