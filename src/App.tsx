import React, { Component } from 'react';
import './App.css';
import { Header, Footer, Menu } from './components/layouts';
import Content from './components/contents/';
import { Container, createMuiTheme, MuiThemeProvider, Paper } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8b2560'
        }
    }
});

class App extends Component {

    render() {
        return (
            
                <MuiThemeProvider theme={theme}>
                    <Paper>
                        <div className="App">
                            <div className="App-Content">
                                <div className="App-Header">
                                    <Header />
                                </div>

                                <div className="App-Menu">
                                    <Menu />
                                </div>

                                <div className="App-Main">
                                    <Container maxWidth={false}>
                                        <Content />
                                    </Container>
                                </div>
                                
                            </div>

                            <div className="App-Footer">
                                <Footer />
                            </div>
                        </div>
                    </Paper>
                    </MuiThemeProvider>         
            );      
    }              
}

export default App;
