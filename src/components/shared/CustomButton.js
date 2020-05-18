import React from 'react';
import Button from '@material-ui/core/Button';

const buttonStyle= {
    marginTop:'30px',
    width: '200px', 
    maxHeight: '40px', 
    minHeight: '40px',
    textTransform: 'none'
}

class CustomButtom extends React.Component {
  render () {

    return(
      <div>
        {this.props.cStyle === ''       
        ? 
            <Button onClick={this.props.forwardStep} style={buttonStyle}  variant="contained" color="default">
              {this.props.title}
            </Button>
         
        : 
            <Button onClick={this.props.forwardStep} style={this.props.cStyle}  variant="contained" color="default">
             {this.props.title}
            </Button>
         
        }
      </div>   
    
    );
  }
  
}
CustomButtom.defaultProps = {
  cStyle:'', forwardStep:''
};
export default CustomButtom;