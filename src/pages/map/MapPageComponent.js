import React, { Component } from 'react';
import MapAPI from '../../api/map';
import MapboxComponent from '../../components/map/MapboxComponent';
import SidebarComponent from 'components/sidebar/SidebarComponent';

class MapPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            selectedLocation: null
        };
    }

    componentDidMount() {
        this.getLocations();
    }
      
    async getLocations() {
        const locations = await MapAPI.getLocations();
        this.setState({ locations: locations.data });
    }

    handleSelectedLocation = (selectedLocation) => {
        this.setState({selectedLocation});
    }

    render() {
        return <div className="wrapper">
            <SidebarComponent locations={this.state.locations} onSelectLocation={this.handleSelectedLocation} />
            <div className="content">
                <MapboxComponent locations={this.state.locations} selectedLocation={this.state.selectedLocation}/>
            </div>
        </div>;
    }
}

export default MapPageComponent;
