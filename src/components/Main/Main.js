import classes from "./Main.module.css";
import Card from "../UI/Card.js";
import SelectCity from "../SelectCity/SelectCity.js";

import convert from "../../utilis/convertTemp.js";
import weatherIcon from "../../utilis/weatherIcon.js";

const Main = (props) => {
    const date = new Date();
    let currentData = {
        date: date.toLocaleString(),
        temperature: `${Math.round(props.weatherData.temp - 273.15)}`,
        dewPoint: `${Math.round(props.weatherData.dew_point - 273.15)}`,
        humidity: `${Math.round(props.weatherData.humidity)}%`,
        visibility: `${props.weatherData.visibility/1000}km`,
        icon: weatherIcon(props.weatherData.weather[0].main),
    }

    if(props.temperatureType === "F") {
        currentData = convert(currentData);
    }

    return (
        <div>
            <Card>
                <SelectCity city={props.city} setCity={props.setCity} />
            </Card>
            <Card>
                <div className={classes.date}>
                    {currentData.date}
                </div>
                <h2 className={classes.city}>{props.city}, Nepal</h2>
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
        </div>
    );
};

export default Main;
