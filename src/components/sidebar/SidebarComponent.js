import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import { fade, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = theme => ({
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.4),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.6),
        },
        marginLeft: 0,
        marginBottom: 10,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
});

class SidebarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: props.locations
        };
    }

    searchMarker = (event) => {
        let searchTerm = event.target.value.toLowerCase();
        let locations = this.props.locations.filter(location => location.title.toLowerCase().includes(searchTerm));
        
        this.setState({locations});
    }

    getMarkers = () => {
        let markers = this.state.locations;

        if(!markers.length) {
            markers = this.props.locations;
        }

        return markers;
    }

    selectMarker = (marker) => {
        this.props.onSelectLocation(marker); 
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="sidebar">
                <Typography className={classes.title} variant="h6" noWrap>
                    NativeTour
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Пошук…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={this.searchMarker}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className="locationsList">
                    <List component="nav">
                        {this.getMarkers().map((location, key) => (
                            <ListItem button key={key} onClick={(event) => this.selectMarker(location)}>
                                <ListItemIcon>
                                    <RoomIcon />
                                </ListItemIcon>
                                <ListItemText primary={ location.title } />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
        );
    }
}

SidebarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(useStyles)(SidebarComponent);
