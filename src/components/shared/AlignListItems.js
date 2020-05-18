import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '20ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

class AlignItemsList extends React.Component{
  
  createPartner(partner) {
        const classes = {
          root: {
            width: '100%',
            maxWidth: '20ch',
          },
          inline: {
            display: 'inline',
          },
        }
          return(  
            <div style={{width:'100px'}}>  
              
              <Button id={partner.id} onClick={this.props.chooseAP} Style={{width: '200px', maxHeight: '40px', minHeight: '40px', marginTop:'0px',textTransform: 'none'}} >  
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={partner.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          <span>position: {partner.position}</span>
                        </Typography>
                        <p stryle={{margin:'0px', padding:'0px'}}>{partner.bio}</p>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Button>   
              <Divider variant="inset" component="li" />
            </div>  
          );  
        
      }
      render(){
        const classes = {
          root: {
            width: '100%',
            maxWidth: '20ch',
          },
          inline: {
            display: 'inline',
          },
        }
       
        return (
          <List className={classes.root}>
            { this.props.text.map((partner) => {
                return this.createPartner(partner);
              })
            }
          </List>
        );
      }  
}
export default AlignItemsList;