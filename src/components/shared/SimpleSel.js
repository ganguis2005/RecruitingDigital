import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const formControl = {
  
  minWidth: 200,
}

class SimpleSel extends React.Component {


  constructor(props){
    super(props);
    
    this.state = ({
        opcion: "",
    });
    // Set Init State
    this.setState({opcion: this.props.label});

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({opcion: event.target.value})
    this.props.setFach(event.target.value);
  }
  
  

  render(){
    return (
      <div>
        <FormControl style={formControl}>
        <InputLabel id="demo-simple-select-label">{this.props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.opcion}
            onChange={this.handleChange}
          >
            {this.props.options.map(function(option){
                return <MenuItem value={option.value}>{option.name}</MenuItem>
            })}
          </Select>
        </FormControl>
    </div>
    );
  }
}
export default SimpleSel;