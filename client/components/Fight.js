/* eslint-disable no-restricted-syntax */
/* eslint-disable no-debugger, quotes, no-unused-vars */

import React from 'react';
import FighterSelect from './FighterSelect';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rFighter: null,
                   lFighter: null,
                   rWeapon: null,
                   lWeapon: null,
                   fighterList: null,
                   weaponList: null };
    // this.submitFighter = this.submitFighter.bind(this);
    this.retrieveFighters = this.retrieveFighters.bind(this);
    this.retrieveWeapons = this.retrieveWeapons.bind(this);
    this.updateFighterState = this.updateFighterState.bind(this);
    this.updateFighter = this.updateFighter.bind(this);
    this.updateWeaponState = this.updateWeaponState.bind(this);
    this.startFight = this.startFight.bind(this);
    this.retrieveItems = this.retrieveItems.bind(this);
    this.retrieveItems();
  }

  retrieveFighters() {
    const url = './fighters/';
    fetch(url)
    .then((r) =>
      r.text().then(j => {
        const resp = JSON.parse(j);
        this.setState({ fighterList: resp.fighter });
        console.log('fighter list: ', this.state.fighterList);
      })
    );
  }

  retrieveWeapons() {
    const url = './weapons/';
    fetch(url)
    .then((r) =>
      r.text().then(j => {
        const resp = JSON.parse(j);
        this.setState({ weaponList: resp.weapon });
        console.log('weapon list: ', resp.weapon);
      })
    );
  }

  retrieveItems() {
    this.retrieveFighters();
    this.retrieveWeapons();
  }

  updateFighter(id) {
    // this should send updated fighter back to server
    return this;
  }

  updateWeaponState() {

  }

  updateFighterState() {

  }

  startFight() {

  }

  render() {
    console.log('rendering', this.state);
    let fighterInputR = null;
    let fighterInputL = null;
    let weaponInputR = null;
    let weaponInputL = null;
    const weaponInput = null;
    if (this.state.rFighter === null) {
      fighterInputR = (
        <td>
          <FighterSelect submitLeft={this.updateFighterState} fighters={this.state.fighterList} />
        </td>);
      fighterInputL = (
        <td>
          <FighterSelect submitRight={this.updateFighterState} />
        </td>);
    }

    if (this.state.rWeapon === null) {
      weaponInputR = (
        <td>
          <FighterSelect submitLeft={this.updateFighterState} fighters={this.state.fighterList} />
        </td>);
      weaponInputL = (
        <td>
          <FighterSelect submitRight={this.updateFighterState} />
        </td>);
    }

    return (
      <div>
        <table>
          <tbody>
            <tr>
              {fighterInputL}
              {fighterInputR}
            </tr>
            <tr>
              {weaponInputL}
              {weaponInputR}
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <button onClick={this.startFight} > Start Fight! </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Fight;
