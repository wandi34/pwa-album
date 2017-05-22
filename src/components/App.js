import React, { PropTypes } from 'react';
import Gallery from 'react-grid-gallery';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div>{this.state.images}</div>
    );
  }
}

export default App;
