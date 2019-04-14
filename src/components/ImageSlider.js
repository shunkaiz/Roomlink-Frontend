import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import {IMAGE_URL} from "../config/constants";
const styles = theme => ({
    imageContainer:{
        width: '100%'
    },
    imageBox:{
        backgroundImage: `url(${IMAGE_URL}/bg1.jpg)`,
        width: '100%',
        height: '408px',
        backgroundSize: 'cover',
    }
});

class ImageSlider extends Component{


    render(){
        const {classes} = this.props;
        return(
            <div className={classes.imageContainer}>
                <div className={classes.imageBox}>
                </div>

            </div>
        )
    }
}

export default (withStyles(styles, {withTheme: true})(ImageSlider));