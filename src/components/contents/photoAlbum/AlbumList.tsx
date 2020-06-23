import React from 'react';
import { Grid, List, Typography, ListItem, ListItemIcon, ListItemText, GridList, GridListTile, GridListTileBar, IconButton, Input, Box,  } from '@material-ui/core';
import FolderIcon from "@material-ui/icons/Folder";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';

export default class AlbumList extends React.Component {

    state = {
        albums: [],
        photos: [],
        showResults: true,
        showAlbums: true,
        search: ""
    };
        
    componentDidMount() {
         axios.get("https://jsonplaceholder.typicode.com/albums").then(res => {
             console.log(res);
             this.setState({ albums: res.data })
             this.setState({ showAlbums: true })
         });
    };

    _showSelectedphotoList(currentAlubId: number) {
        axios.get("https://jsonplaceholder.typicode.com/albums/" + currentAlubId + "/photos").then(res => {
            console.log(res);
            this.setState({ photos: res.data })
        });
    };

    onchange = (e: any) => {
        this.setState({ search: e.target.value })
    };

    render() {

        let filtereredPhotos = this.state.photos.filter((photo: { title: string }) => { return photo.title.indexOf(this.state.search) !== -1 });

        return (
            this.state.showAlbums ?
                <Grid item xs={12} md={12} >
                    <Typography variant="h6">
                        Album list
                    </Typography>
                    <div>
                        <List>
                            {this.state.albums.map((album: { id: number, title: string; }) =>
                                <ListItem button={true} key={album.id} onClick={() => {
                                    this._showSelectedphotoList(album.id);
                                    this.setState({ showAlbums: false });
                                }}>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={album.title}
                                />
                                </ListItem>
                            )}
                        </List>
                    </div>
                </Grid>
                :
                <div>                                       
                    <Typography variant="h6">
                        <IconButton onClick={() => { this.setState({ showAlbums: true }); }}>
                            <ArrowBackIcon />
                        </IconButton>      
                        Photo list                                               
                    </Typography>
                    <Box className="searchBox">
                        <Input placeholder="Search..." value={this.state.search} onChange={this.onchange.bind(this)} />
                    </Box>
                    <GridList cellHeight={150} cols={6}>
                        {filtereredPhotos.map((photo: { id: number, title: string, url: string, thumbnailUrl: string; }) => (                            
                            <GridListTile key={photo.id} >                               
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                                <GridListTileBar
                                    title={photo.title}
                                    titlePosition="bottom"
                                    actionIcon={
                                    <IconButton href={photo.url} target="_blank">
                                        <FullscreenIcon />
                                    </IconButton>}                                       
                                    actionPosition="left" />                                                                                                                                                       
                            </GridListTile>                             
                        ))}
                    </GridList>                    
                </div >
        );
    };
};