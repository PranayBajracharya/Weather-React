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
    const desc = props.data.main;

    if(desc === "Rain") {
        icon = <TiWeatherShower />;
    } else if(desc === "Sunny") {
        icon = <TiWeatherSunny />;
    } else if(desc.includes("Clouds")) {
        icon = <TiWeatherCloudy />;
    } else if(desc.includes("Stormy")) {
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
                    <span>{`${props.data.max} / ${props.data.min} °${props.temperatureType}`}</span>
                </div>
                <div className={classes.description}>{props.data.description}</div>
            </div>
        </li>
    );
};

export default Day;
