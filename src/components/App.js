import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPagesFromLocalstorage } from '../actions/lovedpage.actions';
import { getWeather } from '../actions/api.actions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faPlusSquare, faAnchor, faBan, faPencilAlt, faTrashAlt, faSpinner, faSmog, faPooStorm, faCloudRain, faCloudShowersHeavy, faSnowflake, faCloud, faWind, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

import LovedPageForm from './LovedPageForm/LovedPageForm';
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay';
import Searchbox from './Searchbox/Searchbox';
import LovedPages from './LovedPages/LovedPages';

library.add(faHeart, faPlusSquare, faAnchor, faBan, faPencilAlt, faTrashAlt, faSpinner, faSmog, faPooStorm, faCloudRain, faCloudShowersHeavy, faSnowflake, faCloud, faWind, faTemperatureHigh);

function mapDispatchToProps(dispatch) {
  return {
    getPagesFromLocalstorage: a => dispatch(getPagesFromLocalstorage(a)),
    getWeather: () => dispatch(getWeather()),
  };
}

const mapStateToProps = state => {
  return {
    isFormShown: state.lovedpage.isFormShown,
  };
};

class ConnectedApp extends React.Component {
  render() {
    if (this.props.isFormShown) {
      return (
        <div className="App" >
          <LovedPageForm />
        </div>
      );
    } else {
      return (
        <div className="App" >
          <DateTimeDisplay />
          <WeatherDisplay />
          <Searchbox />
          <LovedPages />
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.getPagesFromLocalstorage();
    this.props.getWeather();

    setTimeout(() => this.props.getWeather(), 1000 * 60 * 5);
  }
}

const App = connect(mapStateToProps, mapDispatchToProps) (ConnectedApp);

export default App;
