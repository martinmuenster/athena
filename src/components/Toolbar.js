import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';

import { auth, db } from '../firebase';

export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: true,
            value: 3,
        };
        console.log(this.props.authUser);
    }

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <Toolbar style={{backgroundColor: '#1E88E5'}}>
                <ToolbarGroup>
                    <ToolbarTitle text="ATHENA" />
                    <ToolbarSeparator />

                    <FontIcon className="muidocs-icon-custom-sort" />
                    { this.props.authUser
                        ? <RaisedButton onClick={() => auth.signOut()}>Sign Out</RaisedButton> 
                        : <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.SIGN_IN}>Sign in</Link></RaisedButton>
                    }
                    
                    <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.LANDING}>Landing</Link></RaisedButton>
                    <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.HOME}>Home</Link></RaisedButton>
                    <RaisedButton><Link style={{textDecoration: 'none'}}  to={routes.ACCOUNT}>Account</Link></RaisedButton>
                    
                    
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                    
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}