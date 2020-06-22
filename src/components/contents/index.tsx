import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import './index.css';
import AlbumList from './photoAlbum/AlbumList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const style = {
    Paper: { padding: 20 }
}

class Content extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} lg={12} className="Main-Full-Height-Content">
                    <Paper square={true} elevation={3} style={style.Paper}>                        
                        <BrowserRouter>
                            <div>
                                <Switch>
                                    <Route path="/" component={AlbumList} exact />
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </Paper>
                </Grid>              
            </Grid>                       
        );
    }
}

export default Content;