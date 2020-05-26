import React, { Component } from 'react'

export default class APartnerCard extends Component {
    render() {
        const bookStyle = {
            boxSizing:'border-box',
            borderRadius:'20px',
            cursor: 'pointer',
            height:'auto',
            width:'280px',
            maxWidth: '195px',  
            flexShrink:'0',
            margin:'10px',
            boxShadow: '16px 11px 32px -13px rgba(0,0,0,0.75)',
         }
         const mProfile = {
            backgroundImage:`url(${this.props.avatar})`,
            backgroundSize: 'cover',
            height:'80px',
            width:'80px',
            margin: '0 auto',
            padding: 'none',
         }
         const styleH6 = {
            margin: '0px',
            padding: '7px'
         }
         const descriptionStyle = {
            fontSize: '14px',
            margin: 'auto', 
            opacity: '80%',
            padding:'12px'
         }
         const tischStyle ={
            fontSize: '14px',
            paddingBottom: '16px', 
         }
        return (
            <div style={bookStyle}>
                    <p style={{fontSize:'20px', paddingTop:'6px', margin:'1px'}}>Dein Ansprechpartner:</p>
                    <h5 style={styleH6}>{`${this.props.aVName} ${this.props.aNName}`}</h5>
                    <div style={mProfile}>

                    </div>
                    <p style={descriptionStyle}>{this.props.description}</p>
                    <p style={tischStyle}>{`wartet auf dich am Tisch ${this.props.tish}`}</p>
                    <div style={{fontSize: '15px', paddingBottom: '20px'}}>
                     <a href={this.props.stellenanzeigen}>Stellenanzeigen</a>
                    </div>
                    
            </div>
          );
    }
}
APartnerCard.defaultProps = {
    avatar: '/static/images/avatar/1.jpg',
    aPname: '',
    description: '',
    tish:'',
    stellenanzeigen:'',
}

