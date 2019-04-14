import React, { Component } from 'react';
import '../styles/App.css';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider'
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    body:{
        width: '100%'
    },
    navBar:{
        width: '70%'
    },
    themeBar:{

    }
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={0} classes={{container: classes.body}}>
                <Grid item xs={12} classes={{item: classes.navBar}}>
                    <NavBar/>
                </Grid>
                <Grid item xs={12}>
                    <ImageSlider/>
                </Grid>
            </Grid>
        );
    }
}

export default (withStyles(styles, {withTheme: true})(App));