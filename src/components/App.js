import React, { PropTypes } from 'react';
import Gallery from 'react-grid-gallery';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    // this.props.getImages();
  }

  render() {
    if (this.props.images === undefined){ return (
      <button onClick={() => this.props.getImages()}>Test</button>
    )}

    return (
      <div>{this.props.images}</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...actions}, dispatch);
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    images: state.images
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
