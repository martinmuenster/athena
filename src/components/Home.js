import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExampleControlled from "./AvailableGamesTable";

const HomePage = () =>
  <div>
    <h1>Home Page</h1>
    <MuiThemeProvider>
        <TableExampleControlled></TableExampleControlled>
    </MuiThemeProvider>
  </div>

export default HomePage;