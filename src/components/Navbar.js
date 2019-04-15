import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    logoBox:{
        width: '200px',
        height: '57px'
    },
    navBarContainer: {
        width: '90%',
        margin: 'auto',
        height: '110px',
        [theme.breakpoints.up('md')]: {
            width: '70%',
        },
    },
    logoContainer:{

    },
    navBarButtonMobile:{
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    navLogo:{
        fontSize: '26px',
        marginBottom: '-10px',
        display: 'inline-block',
        textDecoration: 'none',
    },
    navButtonContainer:{
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
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

    constructor(props){
        super(props);
        this.state = {
            trackerType: 'Crime',
            mobileMenuOpen: false,
            menuAnchor: null
        }
    }

    handleMobileMenuOpen = (event) =>{
        // temp help to locally store the event object, which is the SyntheticEvent
        let temp = event.currentTarget;
        this.setState(prev=>({
            ...prev,
            mobileMenuOpen: true,
            menuAnchor: temp
        }))
    };

    handleMobileMenuClose = () =>{
        this.setState(prev=>({
            ...prev,
            mobileMenuOpen: false,
            menuAnchor: null
        }))
    };

    render(){
        const {classes} = this.props;
        const typeformURL = "https://haochen633226.typeform.com/to/S86bK0";
        const mobileMenu = (
            <Menu
                anchorEl={this.state.menuAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.state.mobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <Button classes={{root: classes.navButtonRoot, label: classes.navButtonLabel}} href={'#'}>HOME</Button>
                </MenuItem>
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <Button classes={{root: classes.navButtonRoot, label: classes.navButtonLabel}} href={'#'}>ABOUT US</Button>
                </MenuItem>
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <Button classes={{root: classes.navButtonRoot, label: classes.formButton}}
                            href={'#body'}
                    >LETS START</Button>
                </MenuItem>
            </Menu>
        );

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
                <div className={classes.navBarButtonMobile}>
                    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                        <MenuIcon/>
                    </IconButton>
                </div>
                {mobileMenu}

            </Grid>
        );
    }
}


export default (withStyles(styles, {withTheme: true})(NavBar));