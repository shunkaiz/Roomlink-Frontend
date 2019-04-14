import React, { Component } from 'react';
import '../styles/App.css';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';

const styles = theme =>({
    placeholder:{
        fontFamily: 'raleway',
        margin: '20px 20px'
    }
});

class Body extends Component{


    render(){
        const {classes} = this.props;
        return(
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Typography variant={'title'} classes={{title: classes.placeholder}}>Rent</Typography>
                <Typography variant={'title'} classes={{title: classes.placeholder}}>Leasing</Typography>

            </Grid>
        );
    }
}


export default (withStyles(styles, {withTheme: true})(Body));