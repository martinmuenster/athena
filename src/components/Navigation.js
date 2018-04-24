import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './Toolbar.js'

const Navigation = () =>
    
  <div>
      <MuiThemeProvider>
        <Toolbar/>
      </MuiThemeProvider>
  </div>

export default Navigation;