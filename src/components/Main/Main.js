// import { useState, useEffect } from "react";

import classes from "./Main.module.css";
import Card from "../UI/Card.js";

import { TiWeatherCloudy } from "react-icons/ti";

import convert from "../../utilis/convertTemp.js";

const Main = (props) => {

    const date = new Date();
    let currentData = {
        date: date.toLocaleString(),
        temperature: `${Math.round(props.weatherData.temp - 273.15)}`,
        dewPoint: `${Math.round(props.weatherData.dew_point - 273.15)}`,
        humidity: `${Math.round(props.weatherData.humidity)}%`,
        visibility: `${props.weatherData.visibility}`,
        icon: <TiWeatherCloudy />,
    }

    if(props.temperatureType === "F") {
        currentData = convert(currentData);
    }

    return (
        <Card className={classes.main}>
            <div className={classes.date}>
                {currentData.date}
            </div>
            <h2 className={classes.city}>{props.city}</h2>
            <h2 className={classes.temperature}>
                {currentData.icon}
                <span>{`${currentData.temperature}°${props.temperatureType}`}</span>
            </h2>
            <div className={classes.details}>
                <span>Humidity: {currentData.humidity}</span>
                <span>
                    Dew point:
                    {` ${currentData.dewPoint}°${props.temperatureType}`}
                </span>
                <span>Visibility: {currentData.visibility}</span>
            </div>
        </Card>
    );
};

export default Main;
