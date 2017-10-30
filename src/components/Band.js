import React, { Component } from 'react';

class Band extends Component {
  handleDelete = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.id
    })
  }
  render() {

    return(
      <div>
        <li>
          {this.props.band.text}
        </li>
        <button onClick={this.handleDelete}>X</button>
      </div>
    );
  }
};

export default Band;
