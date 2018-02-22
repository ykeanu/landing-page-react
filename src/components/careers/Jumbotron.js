import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Jumbotron extends Component {
  constructor() {
    super();
  }

  // Life Cycle Methods

  // Helper Functions

  render() {
    return (
      <div className="Jumbotron">
        <h1>Come help Dave outsmart overdrafts.</h1>
        <p>
          Banks made $33 Billion on overdraft fees last year alone, but we have
          a better way and we're just getting started.
        </p>
        <Button
          content="View Open Positions"
          color="green"
          circular
          size="massive"
        />
      </div>
    );
  }
}

export default Jumbotron;
