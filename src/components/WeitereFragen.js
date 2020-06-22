import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButtom from './shared/CustomButton';
import BackButton from './shared/BackButton';
import SimpleSel from './shared/SimpleSel';

//hier wird nach der gewuenscte Ort, Position und Anfangsdatum
//wenn man weiter clickt werden die neue Eingaben zu den schon kreierte User in der Db hinzugefuegt
export default class WeitereFragen extends Component {
    
    change = e => {
        
        if(e.target.id === 'vorname') {
            this.props.setVorname(e.target.value);
        } else if (e.target.id === 'nachname') {
            this.props.setNachname(e.target.value);
        } else if (e.target.id === 'eMail') {
            this.props.setEmail(e.target.value);
        }
        
    };
    submitUndWeiter = () => {
        this.props.forwardStep();
        this.props.addPosition();
    }
    render() {
    
        return (
            <div className="app">
                <header className="app__header">
                    <div className="app__logo app__logo--small"></div>
                </header>
                <div className="app__content">
                    <form>
                        <SimpleSel 
                            label="Gewünschte Ort" 
                            options={[{ name: 'Aretsried', value: 'Aretsried' }, 
                                      { name: 'Bad Essen/Lintorf', value: 'Bad Essen/Lintorf' }, 
                                      { name: 'Bottrop', value: 'Bottrop' }, 
                                      { name: 'Dissen', value: 'Dissen' },
                                      { name: 'Düsseldorf', value: 'Düsseldorf' },
                                      { name: 'Freising', value: 'Freising' },
                                      { name: 'Leppersdorf', value: 'Leppersdorf' },
                                      { name: 'Dresden', value: 'Dresden' },
                                      { name: 'Memmingen', value: 'Memmingen' },
                                      { name: 'Rogätz', value: 'Rogätz' },
                            ]} 
                            setSelected={this.props.setOrt}
                        />
                        <SimpleSel 
                            label="Gewünschte Position" 
                            options={[{ name: 'Direkteinsteig', value: 'Direkteinsteig' }, 
                                      { name: 'Praktikum', value: 'Praktikum' }, 
                                      { name: 'Trainee', value: 'Trainee' }, 
                                      { name: 'Werkstudent', value: 'Werkstudent' }
                            ]} 
                            setSelected={this.props.setPosition}
                        />
                        <br />        
                        <TextField
                            id="date"
                            label="Anfangsdatum"
                            type="date"
                            defaultValue="2020-05-24"
                            onChange={this.props.handleDateChange}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <CustomButtom title="Weiter" forwardStep={this.submitUndWeiter} />   
                    </form>
                </div>
                <div className="app__actions">
                    <BackButton className="back-btn"  prevStep={this.props.prevStep}/>
                </div>
            </div>    
        )
    }
}
