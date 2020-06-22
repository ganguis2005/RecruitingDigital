import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButtom from './shared/CustomButton';
import BackButton from './shared/BackButton';

//in dienem Form wird nach Vorname, Nachname und Email gefragt
export default class Form extends Component {
    
    change = e => {
        
        if(e.target.id === 'vorname') {
            this.props.setVorname(e.target.value);
        } else if (e.target.id === 'nachname') {
            this.props.setNachname(e.target.value);
        } else if (e.target.id === 'eMail') {
            this.props.setEmail(e.target.value);
        }
        
    };

    render() {
    
        return (
            <div className="app">
                <header className="app__header">
                    <div className="app__logo app__logo--small"></div>
                </header>
                <div className="app__content">
                    <form>
                        <TextField id="vorname" label="Vorname" required={true} ref="vorname"  onChange={this.change}/>
                        <br />
                        <TextField id="nachname" label="Nachname" required={true} onChange={this.change}/>
                        <br />
                        <TextField id="eMail" label="E-mail" required={true} onChange={this.change}/>
                        <CustomButtom title="Weiter" forwardStep={this.props.forwardStep} />   
                    </form>
                </div>
                <div className="app__actions">
                    <BackButton className="back-btn"  prevStep={this.props.prevStep}/>
                </div>
            </div>    
        )
    }
}
