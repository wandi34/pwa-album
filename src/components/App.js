import React from 'react';
// import Lightbox from 'react-images';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import ReactSpinner from "react-spinner";
import Gallery from 'react-grid-gallery';
import Lightbox from 'react-lightbox-component';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.fetchImages();
  }

  closeLightbox() {

  }

  render() {
    return (
      this.props.images ?
        <Gallery images={this.props.images} />
        : <ReactSpinner/>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...actions}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
