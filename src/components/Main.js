import React, { Component } from 'react';
import Form from './Form';
import Datenschutz from './Datenschutz';
import Occupation from './Occupation';
import APartner from './APartner';
import fire from '../fire.js';
import WeitereFragen from './WeitereFragen';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step : 1, 
            vorname : '',
            nachname: '',
            occupation:'',
            fachbereich:'',
            email:'',
            id: null,
            anfangsDatum: '',
            position: '',
            ort:'',
        };        
    }    
    //zur weiteren Step
    forwardStep = () => {
        let newStep= this.state.step + 1;
        this.setState({step: newStep});
    }
    //zur vorhearigen Step
    prevStep = () => {
        let newStep= this.state.step - 1;
        this.setState({step: newStep});
    } 
    //Zuweisung User Vorname
    setVorname = (value) => {
        this.setState({vorname: value});
    }
    //Zuweisung User Nachname    
    setNachname = (value) => {
        this.setState({nachname: value});
    }
    //Zuweisung User Email
    setEmail = (value) => {
        this.setState({email: value});
    }
    //Zuweisung User Occupation    
    setOccupation = (event) => {
        this.setState({occupation: event.target.value});
    };
    //Zuweisung User Fachbereich    
    setFach = (value) => {
        this.setState({fachbereich: value});
    }
    //Zuweisung gewuenschte Anfagsdatum der Taetigkeit
    setDatum = (date) => {
        this.setState({anfangsDatum: date.target.value});
    }
    // Zuweisung gewuenschte Taetigkeit    
    setPosition = (pos) => {
        this.setState({position: pos});
    };
    // Zuweisung gewuenschte Taetigkeitsort des Users    
    setOrt = (ort) => {
        this.setState({ort: ort});
    };
    // Adds User Grunddaten zur Database     
    addUser = () => {
        let userRef = fire.collection('users').doc(`${this.state.id}`);
        userRef.set({
            vorname: this.state.vorname,
            nachname: this.state.nachname,
            occupation: this.state.occupation,
            fachbereich: this.state.fachbereich,
            email: this.state.email,
            id: this.state.id,    
        });
    }
    // Adds weitere Daten des Users zur Database (Anfangsdatum, gewuenschte Taetigkeit, Taetigkeitsort)
    addPosition = () => {
        let userRef = fire.collection('users').doc(`${this.state.id}`);
        userRef.update({
            anfangsDatum: this.state.anfangsDatum,
            position: this.state.position,
            ort: this.state.ort,   
        });
    }
    //Kreiert eine Id fuer den User (in der Db gibt es ein Counter die als laetzte verfuegware ID dient, diese Zahl wird erhoet wenn die Id zu einem User zugewiesen wird)
    getId = () => {
        let idRef = fire.collection('idCounter').doc('idCounter');
        let getDoc = idRef.get()
          .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data().lastID);
              this.setState({id: doc.data().lastID});
              let num = doc.data().lastID;
              num++;
              idRef.set({
                  lastID: num,
              });

            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
    }

    componentDidMount() {
        this.getId();
    }
   
    render() { 
        
        switch(this.state.step) {
            case (1) : return <Datenschutz forwardStep={this.forwardStep} />;

            case (2) : return <Form forwardStep={this.forwardStep} prevStep={this.prevStep} setVorname={this.setVorname} setNachname={this.setNachname} setEmail={this.setEmail} />;

            case (3) : return <Occupation forwardStep={this.forwardStep} prevStep={this.prevStep} vorname={this.state.vorname} setOccupation={this.setOccupation} setFach={this.setFach} addUser={this.addUser}/>;
            
            case (4) : return <WeitereFragen forwardStep={this.forwardStep} prevStep={this.prevStep} handleDateChange={this.setDatum} setPosition={this.setPosition} setOrt={this.setOrt} addPosition={this.addPosition}/>
    
            case (5) : return < APartner user={this.state.id} occupation={this.state.occupation} fachbereich={this.state.fachbereich}/>;
        }
    }
}
