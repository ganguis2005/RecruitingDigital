import React from 'react'
import APartnerCard from './APartnerCard';
import fire from '../fire.js';

//fetch a random APartner from the Db to the state that have the status avalible = true
//change his status in the db to false 
class APartner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aPartner: {},
    };
    this.randomIndex = this.randomIndex.bind(this);
  }
  

  //returns a random number between num >= 0 num < max 
  randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  //ein Ansprechpartner wird aus den avalible Ansprechpartner in der Db per Zufall ausgewaehlt
  getAP = () => {
    let ref = fire.collection('aPartner');
    let queryRef = ref.where('avalible', '==', true)
        .get()
          .then(snapshot => {
            if (snapshot.empty) {
              console.log('No matching documents.');
              return;
            }  
            let arr = [];
            snapshot.forEach(doc => {
              arr.push(doc.data());
            });
            let choosenAP = arr[this.randomIndex(arr.length)];
            this.setState({aPartner: choosenAP});


            let aPRef = fire.collection('aPartner').doc(`${choosenAP.id}`);
            //Aendert die Status von dem Ansprechpartner in der Db zu unavalible
            //let updateAvalible = aPRef.update({avalible: false});  
            //speichert in der Db der Ansprechpartner welche User zu ihm kommt
            let updateIncomingUser = aPRef.update({incomingUser: this.props.user});          
          })
          .catch(err => {
            console.log('Error getting document', err);
          });
  }

  componentWillMount() {
    this.getAP();
  }
  render () {
    let aPartner = this.state.aPartner;
  
    return(
      <div className="app">
        <header className="app__header">
        <div className="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <APartnerCard 
            avatar={aPartner.avatar}
            aVName={aPartner.vorname}
            aNName={aPartner.nachname}
            description={aPartner.description}
            tish={aPartner.tish}
          />
        </div>
      </div>    
    );
  }
}

export default APartner;


