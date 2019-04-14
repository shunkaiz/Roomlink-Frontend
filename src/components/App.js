import React, { Component } from 'react';
import '../styles/App.css';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider'
import Body from '../components/Body'
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
                <NavBar/>
                <ImageSlider/>
                <Body/>

            </Grid>
        );
    }
}

export default (withStyles(styles, {withTheme: true})(App));