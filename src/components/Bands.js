import React, { Component } from 'react';
import Band from "./Band"
class Bands extends Component {
  render() {

    let allBands = this.props.store.getState().bands.map((band, index) => {
      return <Band band={band} store={this.props.store} key={index} id={band.id} />
    })

    return(
      <ul>
        {allBands}
      </ul>
    );
  }
};

export default Bands;
