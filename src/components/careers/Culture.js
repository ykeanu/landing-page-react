import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class Culture extends Component {
  constructor() {
    super();
    // this.renderCultureContent = this.renderCultureContent.bind(this);
  }

  // Life Cycle Methods

  // Helper Functions
  // renderCultureContent() {
  //   return()
  // }

  render() {
    return (
      <div className="Culture">
        <div className="culture-header">
          <h1>Our culture</h1>
          <div className="culture-divider" />
          <p>
            We're looking for teammates who like to be challenged, who dare to
            root for the underdog, who are deeply thoughtful and compassionate,
            and above all take pride in helping serve your fellow community.
          </p>
        </div>
        <div className="culture-content">
          <div classNAme="compassion">
            <h1>COMPASSION</h1>
            <p>Our customers often come to us at some of the most desperate moments of their life, so the products we develop have real-world and immediate consequences. The more you can understand and have compassion for our customers, the better your solutions to their problems will be.</p>
          </div>
          <div classNAme="transparency">
            <h1>TRANSPARENCY</h1>
            <p>Customers come to us out of frustration with their banks’ hidden fees and shady tactics that actually encourage overdraft. Dave practices full transparency in order to win the trust of our customers. Instead of charging interest for our advances, we let our customers decide to pay what’s fair with an optional tip.</p>
          </div>
          <div classNAme="service">
            <h1>SERVICE</h1>
            <p>We believe that customer service is a differentiating factor for success. We aren’t just building products. We are helping people. For as data-driven as we are, we are first and foremost human-centered. Dave is dependable and steps in to help when friends and family can’t. We hope you’re the same.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Culture;
