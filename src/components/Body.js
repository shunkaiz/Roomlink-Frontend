import React, { Component } from 'react';
import '../styles/App.css';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import pink from '@material-ui/core/colors/pink';
import {mdiLink} from "@mdi/js"
import { ReactTypeformEmbed } from 'react-typeform-embed';
import ScrollableAnchor from 'react-scrollable-anchor'
const styles = theme =>({
    placeholder:{
        fontFamily: 'raleway',
        margin: '20px 20px'
    },
    formButtonRoot:{
        borderRadius: '10px',
        backgroundColor: pink[600],
        '&:hover': {
            backgroundColor: pink[800],
        },
        color: '#fff',
        fontWeight: '700',
    },
    formButtonLabel:{
        fontSize: '20px',
        fontFamily: 'raleway',
        lineHeight: '25px',
        fontWeight: '700',
    },
    linkIcon:{
        marginLeft: '10px',
    }
});

class Body extends Component{
    openForm =()=>{
        this.typeformEmbed.typeform.open();
    };

    componentDidMount(){
        document.getElementsByClassName('ReactTypeformEmbed')[0].style.display = 'none';
        // console.log(this.typeformEmbed);
        // this.typeformEmbed.typeform.close();
    }

    render(){
        const {classes} = this.props;
        return(
            <ScrollableAnchor id={'body'}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div style={{height:'100px'}}/>
                    <Button classes={{root: classes.formButtonRoot, label: classes.formButtonLabel}}
                            href={'#'}
                            variant={'contained'}
                            onClick={this.openForm}>Let's Link
                            <Icon path={mdiLink}
                                  size={1.5}
                                  color={'#fff'}
                                  className ={classes.linkIcon}
                            />
                    </Button>
                    <div style={{height:'1000px'}}/>
                    <ReactTypeformEmbed popup url={"https://demo.typeform.com/to/njdbt5"}
                                        autoOpen={false}
                                        ref={tf => {
                                            this.typeformEmbed = tf;
                                        }}
                                        hideHeaders
                                        hideFooter
                                        buttonText="Go!"
                                        style={{ top: 100 }}
                    />
                </Grid>
            </ScrollableAnchor>
        );
    }
}


export default (withStyles(styles, {withTheme: true})(Body));