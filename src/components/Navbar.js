import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from "@material-ui/core/styles/index";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    logoBox:{
        width: '200px',
        height: '57px'
    },
    navBarContainer:{
        width: '70%',
        margin: 'auto',
        height: '110px'
    },
    logoContainer:{

    },
    navLogo:{

    },
    navButtonRoot:{
        width: '105px',
        height: '25px',
        borderWidth: '2px',
        borderColor: 'transparent',
    },
    navButtonLabel:{
        fontFamily: 'raleway',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '25px'
    }
});

class NavBar extends Component{

    render(){
        const {classes} = this.props;
        return(
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  classes={{container: classes.navBarContainer}}
            >
                <div className={classes.logoContainer}>
                    <a className= {classes.navLogo} href={window.location.href}>
                        <div className={classes.logoBox}/>
                    </a>
                </div>

                <div className={classes.navButtonContainer}>
                    <Button classes={{root: classes.navButtonRoot, label: classes.navButtonLabel}} href={'/'}>HOME</Button>
                    <Button classes={{root: classes.navButtonRoot, label: classes.navButtonLabel}} href={'/'}>TAB1</Button>
                    <Button classes={{root: classes.navButtonRoot, label: classes.navButtonLabel}} href={'/'}>TAB2</Button>
                </div>

            </Grid>
        );
    }
}


export default (withStyles(styles, {withTheme: true})(NavBar));