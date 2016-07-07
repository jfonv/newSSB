/* eslint-disable max-len */

import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">ChangeMe</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/"><i className="fa fa-home fa-fw"></i> Home</Link></li>
          <li><Link to="/Fighters"><i className="fa fa-trophy fa-fw"></i>Fighters</Link></li>
          <li><Link to="/Weapons"><i className="fa fa-shield fa-fw"></i> Weapons</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
