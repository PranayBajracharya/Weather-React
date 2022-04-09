import classes from "./Day.module.css";

import weatherIcon from "../../../utilis/weatherIcon.js";

const Day = (props) => {

    const desc = props.data.main;
    const icon = weatherIcon(desc);

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
