import React from 'react'
import SimpleSel from './shared/SimpleSel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CustomButtom from './shared/CustomButton';
import BackButton from './shared/BackButton';
class Occupation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {name: 'Informatik', value: 'Informatik'},
        {name: 'Betribswirtschaftslehre', value: 'Betriebswirtschaftslehre'},
        {name: 'Biologie', value: 'Biologie'},
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.forwardStep();
    this.props.addUser();
  }
  render () {
    return(
      <div className="app">
        <header className="app__header">
          <div class="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p style={{fontSize:'18px'}}>Hallo {this.props.vorname}! <br /> Schön, dass du da bist. </p> 
          <div style={{fontSize: '18px', textAlign:'left', marginLeft:'12px'}}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Bist du:</FormLabel>
              <RadioGroup aria-label="occupation" name="occupation"  onChange={this.props.setOccupation}>
                  <FormControlLabel value="Schüler" control={<Radio />} label="Schüler" />
                  <FormControlLabel value="Student" control={<Radio />} label="Student" />
                  <FormControlLabel value="Absolvent" control={<Radio />} label="Absolvent" />
              </RadioGroup>
              </FormControl>  
              <SimpleSel label="Fachbereich" options={this.state.options} setFach={this.props.setFach}/>
              <CustomButtom cStyle={{width: '200px', maxHeight: '40px', minHeight: '40px', marginTop:'10px',textTransform: 'none'}} 
                            title="Weiter" 
                            forwardStep={this.handleClick}
              />
              
          </div>
        </div>
        <div className="app__actions">
          <BackButton class="back-btn"  prevStep={this.props.prevStep}/>
        </div>
      </div>    
    );
  }
}

export default Occupation;