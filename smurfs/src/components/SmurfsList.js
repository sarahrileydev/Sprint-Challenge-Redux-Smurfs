import React, { Component } from 'react';
import Smurf from './Smurf';

class SmurfsList extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
              />
            );
           })}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default SmurfsList;