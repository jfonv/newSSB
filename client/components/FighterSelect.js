/* eslint-disable no-underscore-dangle */

import React from 'react';

class FighterSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.updateFighterState = this.updateFighterState.bind(this);
  }

  update() {

  }
  updateFighterState() {
  }

  render() {
    return (
      <div>
        <div>
          <label>Fighter Name: </label>
          <select ref="fighterName" >
            {this.props.fighters.map((t) =>
              <option key={t._id} value={t._id}>{t.name}</option>)}
          </select>
        </div>
        <div>
          <label>Image URL: </label>
          <input type="Text" ref="fighterImageUrl" />
        </div>
        <div>
          <button onClick={this.submitFighter}>Submit</button>
        </div>
      </div>
    );
  }
}

FighterSelect.propTypes = {
  fighters: React.PropTypes.array,
};

export default FighterSelect;

/*     {this.props.fighters.map((t) =>
      <option key={t._id} value={t._id}>{t.name}</option>)}

      */
