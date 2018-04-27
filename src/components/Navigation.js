import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from './Toolbar.js'

const Navigation = (props) =>
    
  <div>
      <MuiThemeProvider>
        <Toolbar authUser={props.authUser}/>
      </MuiThemeProvider>
  </div>

export default Navigation;