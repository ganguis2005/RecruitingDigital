import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CustomButtom from './shared/CustomButton';
import Button from '@material-ui/core/Button'
export default class Datenschutz extends Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
        this.handleCheck = this.handleCheck.bind(this);

    }
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
            
        
        return (
            <div className="app">
            <header className="app__header">
                <div className="app__logo app__logo--small"></div>
            </header>
            <div className="app__content">
                    <a href='https://www.muellermilch.de/datenschutz/'>
                        <Button  variant="" color="default">
                            Datenschutz
                        </Button>
                    </a>
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
        )
    }
}
