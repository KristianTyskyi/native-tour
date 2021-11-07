import React, { Component } from 'react';
import ReactMapGL, { Layer, Marker, Popup, Feature } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Mapbox.css';
import parse from 'html-react-parser';


class MapboxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: '75vw',
                height: '100vh',
                latitude: 48.9226,
                longitude: 30.382,
                zoom: 5.5,
            },
            mapStyle: 'mapbox://styles/mapbox/streets-v9',
            selectedLocation: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedLocation !== this.state.selectedLocation) {
          this.setState({ selectedLocation: nextProps.selectedLocation });
          this.setState({ viewport: {...this.state.viewport} });
        }
      }

    render() {
        return <ReactMapGL
            mapStyle={this.state.mapStyle}
            {...this.state.viewport}
            onViewportChange={(viewport) => {
                this.setState({viewport})
            }
            }
        >
            {this.props.locations.map((location, key) => (
                <Marker
                    key={key}
                    latitude={Number(location.latitude)}
                    longitude={Number(location.longitude)}
                    offsetLeft={-20} 
                    offsetTop={-20}
                >
                    <button
                        className="marker-btn"
                        onClick={e => {
                            e.preventDefault();
                            this.setState({selectedLocation: location});
                            this.setState({ viewport: {...this.state.viewport} });
                        }}
                    >
                        <img src="marker.svg" alt="Location Icon" />
                    </button>
                </Marker>
            ))}
            {this.state.selectedLocation ? (
                <Popup
                    latitude={Number(this.state.selectedLocation.latitude)}
                    longitude={Number(this.state.selectedLocation.longitude)}
                    onClose={() => {
                        this.setState({selectedLocation: null});
                    }}
                >
                    <div className="location-popup">
                        {this.state.selectedLocation.mainImage ? 
                            <img src={'http://127.0.0.1:8000'+this.state.selectedLocation.mainImage.imagePath} alt={this.state.selectedLocation.title} />
                            : null }
                        <h2>{this.state.selectedLocation.title}</h2>
                        <p>{ parse(this.state.selectedLocation.description) }</p>
                    </div>
                </Popup>
            ) : null}
        </ReactMapGL>;
    }
}

export default MapboxComponent;
