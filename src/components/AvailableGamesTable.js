import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

import { db } from '../firebase';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

var tableData = [
    {
        date: 'April 10th 2018',
        timeStart: "10:00pm",
        duration: "1 hour",
        numOfPlayers: "2",
        enrolled: false

    },
    {
        date: 'April 10th 2018',
        timeStart: "10:00pm",
        duration: "1 hour",
        numOfPlayers: "2",
        enrolled: false
    },
    {
        date: 'April 10th 2018',
        timeStart: "10:00pm",
        duration: "1 hour",
        numOfPlayers: "2",
        enrolled: false
    },
    {
        date: 'April 10th 2018',
        timeStart: "10:00pm",
        duration: "1 hour",
        numOfPlayers: "2",
        enrolled: false
    },
    {
        date: 'April 10th 2018',
        timeStart: "10:00pm",
        duration: "1 hour",
        numOfPlayers: "2",
        enrolled: true
    },
    {
        date: 'April 10th 2018',
        timeStart: "10:00pm",
        duration: "1 hour",
        numOfPlayers: "2",
        enrolled: true
    },
    {
        date: 'April 10th 2018',
        timeStart: "10:00pm",
        duration: "1 hour",
        numOfPlayers: "2",
        enrolled: true
    },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '300px',
            tableData: tableData,
            gameData: {}
        };
       

        /*db.gamesRef.on("value", function (data) {
            self.state.gameData = data.val();
        });*/

    }
    
    componentDidMount() {
        var self = this;
        db.gamesRef.once("value").then(snap => {
            self.setState({gameData: snap.val()})
        })
    }


    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    addUserToGame = (index, row) => {
        this.state.tableData[index].enrolled = !row.enrolled;
        this.setState({tableData,});
        //Firebase Implementation
            //Add user to game
            //
    }

    isUserInGame = (index, row) => {
        this.state.tableData[index].enrolled = !row.enrolled;
        this.setState({tableData,});
        //Firebase Implementation
        //Checks if user is in the game already
        //Returns boolean
    }



    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                               This is Gouttham's hardcoded superheader.
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Game Number">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Time Start">Time Start</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Duration">Duration</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Number of Players">Number of Players</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Choose Games">Choose Games</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {Object.values(this.state.gameData).map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.date}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter
                        adjustForCheckbox={this.state.showCheckboxes}
                    >
                        <TableRow>
                            <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                                Super Footer
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    }



}