import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './menu/menu.jsx';
import Paper from 'material-ui/Paper';

const menuItems = [
  { name: "BLT", price: 3, category: "breakfast" },
  { name: "Bagel", price: 1, category: "breakfast" },
  { name: "Turkey Sub", price: 5, category: "lunch" },
  { name: "Chicken Wrap", price: 4, category: "lunch" },
  { name: "Burger", price: 4, category: "dinner" },
  { name: "Fish Dinner", price: 8, category: "dinner" }
];

class PetersApp extends React.Component {
  componentWillMount() {
    this.state = { menuItems };
  }

  render() {
    return (this.state.menuItems == null ? null
      : <MuiThemeProvider>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Peters App</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="col-xs-12 col-sm-9">
              Somethings Gotta Go here lol
            </div>
            <div className="col-xs-6 col-sm-3" id="sidebar">
              <Paper z-depth={3}><Menu menuItems={this.state.menuItems} /></Paper>
            </div>
          </div>
        </div>
      </MuiThemeProvider>);
  }
}
















/* LAST THING TO RUN LOL */

ReactDOM.render(
  <PetersApp menuItems={this.menuItems} />,
  document.getElementById('PetersApp')
);