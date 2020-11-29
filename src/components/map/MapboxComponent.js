import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Mapbox.css';

class MapboxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: '100vw',
                height: '100vh',
                latitude: 50.7472,
                longitude: 25.3254,
                zoom: 7,
            },
            mapStyle: 'mapbox://styles/mapbox/streets-v9',
            selectedLocation: null
        };
    }

    render() {
        return <ReactMapGL
            mapStyle={this.state.mapStyle}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
        >
            {this.props.locations.map((location, key) => (
                <Marker
                    key={key}
                    latitude={location.coords.latitude}
                    longitude={location.coords.longitude}
                >
                    <button
                        className="marker-btn"
                        onClick={e => {
                            e.preventDefault();
                            this.setState({selectedLocation: location});
                        }}
                    >
                        <img src="/marker.svg" alt="Location Icon" />
                    </button>
                </Marker>
            ))}
            {this.state.selectedLocation ? (
                <Popup
                    latitude={this.state.selectedLocation.coords.latitude}
                    longitude={this.state.selectedLocation.coords.longitude}
                    onClose={() => {
                        this.setState({selectedLocation: null});
                    }}
                >
                    <div className="location-popup">
                        <img src={'/places/'+this.state.selectedLocation.image} alt={this.state.selectedLocation.title} />
                        <h2>{this.state.selectedLocation.title}</h2>
                        <p>{this.state.selectedLocation.description}</p>
                    </div>
                </Popup>
            ) : null}
        </ReactMapGL>;
    }
}

export default MapboxComponent;
