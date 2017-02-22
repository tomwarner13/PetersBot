import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './menu/menu.jsx';
import OrdersTable from './orders/ordersTable.jsx';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import {petersMenu} from './menu/petersMenu.jsx';

const menuItems = petersMenu[0];

class PetersApp extends React.Component {
  componentWillMount() {
    this.state = { menuItems };
  }

  render() {
    let navBarStyle = {
      backgroundColor: "#15294B"
    }
    return (this.state.menuItems == null ? null
      : <MuiThemeProvider>
        <div>
          <AppBar
            title="Peters App"
            iconElementLeft={<div />}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={navBarStyle}
          />
          <div className="container">
            <div className="col-xs-12 col-sm-9">
              <Paper z-depth={4}>
                <OrdersTable />
              </Paper>
            </div>
            <div className="col-xs-6 col-sm-3" id="sidebar">
              <Paper z-depth={2}><Menu menuItems={this.state.menuItems} /></Paper>
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