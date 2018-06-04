import React from 'react';
import SideBar from './sidebar';
import Grid from '@material-ui/core/Grid';
import FontAwesome from 'react-fontawesome';
import Typography from '@material-ui/core/Typography';

const Contact = props => {
    console.log("contact");
    return (
    <Grid container style={{height:"inherit"}}>
      <Grid className="section" item xs={12} sm={12} md={9} id="home-left">
        <Typography variant="display1">Contact me Directly</Typography>        
    <p>To Contact me, you can email <a style={{color:"blue"}} href='mailto:harris.joseph.088@gmail.com'>harris.joseph.088@gmail.com</a>. Or, you may use any of the platforms listed in the right sidebar (below for mobile visitors). The {<FontAwesome name='google'/>} is  linked to my Google+ account which has acces to my Gmail and Hangouts.</p>
      </Grid>
      <SideBar />
    </Grid>
    );
}
export default Contact;
