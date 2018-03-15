import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273.15);

        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    //Using weather because we explicitly use it like that
    // in index.js from reducers
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);