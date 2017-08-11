import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import  * as ProductActions from './actions.js';

export class Gallery extends Component {
  componentDidMount(){
    this.props.loadProducts();
  }
  render() {
    // console.log({Products});
    let images;
    console.log(this.props);
    if (this.props.images !== undefined) {
      images = this.props.images.map((image, key) => {

        return(
          <div className="col-4">
          <h3>{this.props.products[key].languages[0].title}</h3>
          <img className="mini-img" src={image} />
          </div>
        )
      })
    }
        return (
        <div className="container">
            <div className="row">
              {images}
            </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    images: state.images
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery)
