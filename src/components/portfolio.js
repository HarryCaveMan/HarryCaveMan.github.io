import React from 'react';
import Sidebar from './sidebar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import SendIcon from '@material-ui/icons/Send'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    paddingBottom:"10px",
    width: '100%',
    height: '350px',
    overflowY:"scroll"
  },
  icon: {
    color: "#fff",
  },
});

const tileData = [
    {
        img:require('../glasses.jpeg'),
        title:"Code-With-Us",
        subtitle:"Developer forum with live markdown previews",
        url:"http://code-withus.herokuapp.com"
    },
    {
        img:require('../graphs.jpg'),
        title:"Crypto-Clash",
        subtitle:"Crypto Currency dashboard with global chat",
        url:"http://hidden-savannah.78793.herokuapp.com"
    },
    {
        img:require('../nightLife.jpeg'),
        title:"EventHop",
        subtitle:"Need a night off?",
        url:"http://eventhop.herokuapp.com"
    },
    {
        img:require('../news.jpeg'),
        title:"Reddit-News-Scraper",
        subtitle:"Scrapes articles from /r/worldnews and lets me save",
        url:"http://react-news-headlines.herokuapp.com"
    },
    {
        img:require('../birb.jpeg'),
        title:"Clicky-Game",
        subtitle:"Simple React memory game",
        url:"https://gracious-bassi-f82dc1.netlify.com/"
    }
];
const Portfolio = props => {
    console.log("portfolio");
    const { classes } = props;

    return (
    <Grid container style={{height:"inherit"}}>
        <Grid className="section" item xs={12} sm={12} md={9} id="home-left"><Typography variant="display1">Portfolio</Typography>
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
            {tileData.map(tile => (
                <GridListTile className="portfolio-item" key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.subtitle}</span>}
                    actionIcon={
                    <a href={tile.url} rel="noopener" target="_blank">
                      <IconButton className={classes.icon}>
                        <SendIcon />
                      </IconButton>
                    </a>
                    }
                />
                </GridListTile>
            ))}
            </GridList>
        </div>
        </Grid>
        <Sidebar />
    </Grid>
    );
}

    Portfolio.propTypes = {
        classes: PropTypes.object.isRequired,
      };

      export default withStyles(styles)(Portfolio);
