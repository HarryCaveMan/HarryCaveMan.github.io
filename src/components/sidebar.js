import React from 'react';
import Grid from '@material-ui/core/Grid';
import FontAwesome from 'react-fontawesome';
import Typography from '@material-ui/core/Typography';

const SideBar = props =>
    <Grid className="sidebar" id="sidebar-connect" item xs={12} sm={12} md={3}>
    <Typography variant="display1">Connect!</Typography>
        <p><a href="https://plus.google.com/u/0/107378634483203896043" rel="noopener noreferrer" target="_blank"><FontAwesome name='google' /> Google </a></p>
        <p><a href="https://www.linkedin.com/in/harris-joseph-422605104/" rel="noopener noreferrer" target="_blank"><FontAwesome name='linkedin-square' /> LinkedIn</a></p>
        <p><a href="https://github.com/harrycaveman" rel="noopener noreferrer" target="_blank"><FontAwesome name='github' /> Github</a></p>
        <p> <a href="https://stackoverflow.com/users/6078157/thisguycanteven" rel="noopener noreferrer" target="_blank"><FontAwesome name='stack-overflow'/> Stack Overflow </a></p>
        <p> <a href="https://angel.co/harris-charles-joseph-1" rel="noopener noreferrer"><FontAwesome name="angellist" /> AngelList </a></p>
    </Grid>
;

export default SideBar;