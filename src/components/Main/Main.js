import classes from "./Main.module.css";
import Card from "../UI/Card.js";
import SelectCity from "../SelectCity/SelectCity.js";

import weatherIcon from "../../utilis/weatherIcon.js";

const Main = (props) => {
    const date = new Date();
    const { currentData } = props;
    const icon = weatherIcon(currentData.weather[0].main);

    return (
        <div>
            <Card>
                <SelectCity city={props.city} setCity={props.setCity} />
            </Card>
            <Card>
                <div className={classes.date}>
                    {date.toLocaleString()}
                </div>
                <h2 className={classes.city}>{props.city}, Nepal</h2>
                <h2 className={classes.temperature}>
                    {icon}
                    <span>{`${currentData.temp}°${props.temperatureType}`}</span>
                </h2>
                <div className={classes.details}>
                    <span>Humidity: {currentData.humidity}%</span>
                    <span>
                        Dew point:
                        {` ${currentData.dew_point}°${props.temperatureType}`}
                    </span>
                    <span>Visibility: {currentData.visibility}km</span>
                </div>
            </Card>
        </div>
    );
};

export default Main;
