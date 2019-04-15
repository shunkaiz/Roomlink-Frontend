import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";

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
        fontSize: '26px',
        marginBottom: '-10px',
        display: 'inline-block',
        textDecoration: 'none',
    },
    navButtonContainer:{

    },
    navButtonRoot:{
        width: '155px',
        height: '25px',
        borderWidth: '2px',
        borderColor: 'transparent',
    },
    navButtonLabel:{
        fontFamily: 'raleway',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '25px'
    },
    formButton:{
        fontFamily: 'raleway',
        fontSize: '12px',
        lineHeight: '25px',
        fontWeight: '700',
    }
});

class NavBar extends Component{

    render(){
        const {classes} = this.props;
        const typeformURL = "https://haochen633226.typeform.com/to/S86bK0";
        return(
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  classes={{container: classes.navBarContainer}}
            >
                <div className={classes.logoContainer}>
                    <a className= {classes.navLogo} href={window.location.href}>
                        <div className={classes.logoBox}>
                            LOGO
                        </div>
                    </a>
                </div>

                <div className={classes.navButtonContainer}>
                    <Button classes={{root: classes.navButtonRoot, label: classes.navButtonLabel}} href={'#'}>HOME</Button>
                    <Button classes={{root: classes.navButtonRoot, label: classes.navButtonLabel}} href={'#'}>ABOUT US</Button>
                    <Button classes={{root: classes.navButtonRoot, label: classes.formButton}}
                            href={'#body'}
                    >LETS START</Button>
                </div>

            </Grid>
        );
    }
}


export default (withStyles(styles, {withTheme: true})(NavBar));