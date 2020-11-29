import React, { Component } from 'react';
import MapAPI from './MapAPI';
import MapboxComponent from './MapboxComponent';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
    }

    componentDidMount() {
        this.getLocations();
    }
      
    async getLocations() {
        const locations = await MapAPI.getLocations();
        this.setState({ locations: locations.data });
    }

    render() {
        return <MapboxComponent locations={this.state.locations}/>;
    }
}

export default MapComponent;
