import React, { Component } from "react";
import Navigation from "../../../Navigation/Navigation";
import './UploadPosts.css';

class UploadPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
        <>
        <Navigation />
        <div className="mainContainer">
            <p className="text-center">Upload a Post</p>
            <div className="image">
            <img src={this.state.image} />
            <h5>Select a photo</h5>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
    
        
       
      
      </>
    );
  }
}
export default UploadPosts;