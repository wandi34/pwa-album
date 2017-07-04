import React from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import ReactSpinner from "react-spinner";
import Gallery from 'react-grid-gallery';
import { Navbar } from 'react-bootstrap';
import "./App.css";

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
      <div className="App">
        <div className="App-header">
          <h3 className="Header-text"> Imgur Client </h3>
        </div>
        <div className="Appbody">
          <div>{this.props.images ?
            <Gallery images={this.props.images}/>
            : <ReactSpinner/>}
          </div>
          </div>
      </div>

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

function onThumbnailClick() {
  console.log("clicked");
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
