import React, { Component } from 'react';
import { Typography, Box } from '@material-ui/core';

class Footer extends Component {
    render() {
        return (
            <Typography align="center">
                <Box fontStyle="italic">This is a footer link</Box>
            </Typography>
        );
    }
}

export default Footer;
