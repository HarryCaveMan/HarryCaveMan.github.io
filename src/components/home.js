import React from 'react';
import SideBar from './sidebar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = props => {
    console.log("home");
 return (
 <Grid container style={{height:"inherit"}}>
     <Grid className="section" item xs={12} sm={12} md={9} id="home-left">        <Typography variant="display1">Welcome!</Typography>
        <img id="cover" src={require("../MeInARiver.jpeg")} alt="Me in a River" />
        <p>I'm an aspiring data scientist and full stack developer. I received my bachelor's in applied Math from University of North Carolina at Asheville in May of 2017, mainly focusing on big data. Since then, I have continued to expand my skills to include web techonologies such as HTML/CSS/Javascript, Node.js, SQL and noSQL data layers, and React User Interfaces. I have found a new love for RESTful API development, which I see as a vital part of the data analysis workflow.</p>
        <p>
         When I'm not working on my computer, I enjoy Hiking, Fishing, Kayaking, Canoeing, Climbing, And Feeding the Ducks and Turtles at Duke Gardens.
        </p>
    </Grid>
    <SideBar />
 </Grid>
 )
}

export default Home;
