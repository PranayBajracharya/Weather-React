import Card from "../../UI/Card.js";
import classes from "./Hourly.module.css";
import weatherIcon from "../../../utilis/weatherIcon.js";

const Hourly = (props) => {
    const { hourData, temperatureType } = props;
    const icon = weatherIcon(hourData.weather[0].main);

    return (
        <Card className={classes['day-data']}>
            <h3>{hourData.date}</h3>
            <h3>{hourData.time}</h3>
            <h2>
                {icon}
                <span> {hourData.temp}°{temperatureType}</span>
            </h2>
            <h5>Humidity: {hourData.humidity}%</h5>
            <h5>Dew Point: {hourData.dew_point}°{temperatureType}</h5>
            <h5>Visibility: {hourData.visibility/1000}km</h5>
            <h6>{hourData.weather[0].description}</h6>
        </Card>
    );
};

export default Hourly;