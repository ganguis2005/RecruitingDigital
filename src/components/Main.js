import React, { Component } from 'react';
import Form from './Form';
import Datenschutz from './Datenschutz';
import Occupation from './Occupation';
import APartner from './APartner';
import fire from '../fire.js';

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
            //von der DB zu importieren
            items: [],
        };

        this.forwardStep = this.forwardStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.setVorname = this.setVorname.bind(this);
        this.setNachname = this.setNachname.bind(this);
        this.setEmail = this.setEmail.bind(this); 
        this.setOccupation = this.setOccupation.bind(this); 
        this.setFach = this.setFach.bind(this);
        this.getId = this.getId.bind(this);
        
        
    }    

    forwardStep() {
        let newStep= this.state.step + 1;
        this.setState({step: newStep});
    }

    prevStep() {
        let newStep= this.state.step - 1;
        this.setState({step: newStep});
    } 

    setVorname(value) {
        this.setState({vorname: value});
    }

    setNachname(value) {
        this.setState({nachname: value});
    }

    setEmail(value) {
        this.setState({email: value});
    }

    setOccupation(event) {
        this.setState({occupation: event.target.value});
    };

    setFach(value) {
        this.setState({fachbereich: value});
    }

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


    getId() {
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
   
    

    componentWillMount() {
        
      
    }

    componentDidMount() {
        this.getId();
    }
   
    render() { 
        
       
  
        switch(this.state.step) {
            case (1) : return <Datenschutz forwardStep={this.forwardStep} />;

            case (2) : return <Form forwardStep={this.forwardStep} prevStep={this.prevStep} setVorname={this.setVorname} setNachname={this.setNachname} setEmail={this.setEmail} />;

            case (3) : return <Occupation forwardStep={this.forwardStep} prevStep={this.prevStep} vorname={this.state.vorname} setOccupation={this.setOccupation} setFach={this.setFach} addUser={this.addUser}/>
            
            
            case (4) : return < APartner user={this.state.id} occupation={this.state.occupation} fachbereich={this.state.fachbereich}/>
        }
    }
}
