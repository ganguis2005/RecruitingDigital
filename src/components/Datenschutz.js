import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CustomButtom from './shared/CustomButton';
import Button from '@material-ui/core/Button'
import DatenschutzText from './DatenschutzText'
//Landing-Page und Datenschutz Einverstanden
export default class Datenschutz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            displayDS: false
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.toggleDsDisplay = this.toggleDsDisplay.bind(this);

    }
    //displays die Weiter Button wenn man mit der DAtenschutz einverstanden ist
    toggleDsDisplay() {
        let newState = !this.state.displayDS;
        this.setState({displayDS: newState});
    }
    //Check oder uncheck Checkbox
    handleCheck() {
        let newChecked;
        if(this.state.checked === false) {
            newChecked = true;
        } else {
            newChecked = false
        }
        this.setState({checked: newChecked})
    }
    render() {
        let button="";
        if (this.state.checked) {
            button = <CustomButtom title="Weiter" forwardStep={this.props.forwardStep}/>;
        } else {
            button = null;
        }
            
        if (this.state.displayDS) {
            return(
                <DatenschutzText onClick={this.toggleDsDisplay}/>    
            );
        } else {
            return (
                <div className="app">
                <header className="app__header">
                    <div className="app__logo app__logo--small"></div>
                </header>
                <div className="app__content">
                            <Button  variant="" color="default" onClick={this.toggleDsDisplay}>
                                Datenschutz
                            </Button>
        
    
                        <br />
                        <span style={{fontSize: '14px'}}>Einverstanden</span>
                        <Checkbox
                            onChange={this.handleCheck}                            
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                        <br />
                        {button}
                </div>
            </div>    
            );
        }
    }
}
