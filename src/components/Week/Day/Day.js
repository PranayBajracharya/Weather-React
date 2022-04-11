import classes from "./Day.module.css";

import weatherIcon from "../../../utilis/weatherIcon.js";

const Day = (props) => {
    const { dayData, temperatureType } = props;
    const icon = weatherIcon(dayData.weather[0].main);

    return (
        <li>
            <div className={classes.date}>{dayData.date}</div>
            <div className={classes.details}>
                <div className={classes.temperature}>
                    {icon}
                    <span>{`${dayData.temp.max} / ${dayData.temp.min} °${temperatureType}`}</span>
                </div>
                <div className={classes.description}>{dayData.weather[0].description}</div>
            </div>
        </li>
    );
};

export default Day;
