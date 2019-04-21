import React from 'react';
import './WeatherDisplay.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const mapStateToProps = state => {
    return {
        temperature: state.api.weatherTemperature,
        icon: state.api.weatherIcon,
        loading: state.api.weatherLoading,
    };
};

function ConnectedWeatherDisplay(props) {
    return (
        <div className="WeatherDisplay" >
            { props.loading
                ? <div className="weather-loading" >weather loading <FontAwesomeIcon icon="spinner" spin /></div>
                : <div className="weather" >{props.temperature} <FontAwesomeIcon icon="temperature-high" /> <FontAwesomeIcon icon={props.icon} /></div>
            }
        </div>
    );
}

const WeatherDisplay = connect(mapStateToProps) (ConnectedWeatherDisplay);

export default WeatherDisplay;