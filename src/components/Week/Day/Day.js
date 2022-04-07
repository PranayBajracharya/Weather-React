import classes from "./Day.module.css";

import {
    TiWeatherCloudy,
    TiWeatherSunny,
    TiWeatherShower,
    TiWeatherStormy,
    TiWeatherPartlySunny,
} from "react-icons/ti";

const Day = (props) => {
    let icon;
    const desc = props.data.details;

    if(desc.includes("rain")) {
        icon = <TiWeatherShower />;
    } else if(desc.includes("sunny")) {
        icon = <TiWeatherSunny />;
    } else if(desc.includes("cloudy")) {
        icon = <TiWeatherCloudy />;
    } else if(desc.includes("stormy")) {
        icon = <TiWeatherStormy />;
    } else {
        icon = <TiWeatherPartlySunny />
    }

    return (
        <li>
            <div className={classes.date}>{props.data.date}</div>
            <div className={classes.details}>
                <div className={classes.temperature}>
                    {icon}
                    <span>{props.data.temperature}</span>
                </div>
                <div className={classes.description}>{props.data.details}</div>
            </div>
        </li>
    );
};

export default Day;
