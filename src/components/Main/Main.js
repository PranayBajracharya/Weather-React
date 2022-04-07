// import { useState, useEffect } from "react";

import classes from "./Main.module.css";
import Card from "../UI/Card.js";


const Main = (props) => {
    return (
        <Card className={classes.main}>
            <div className={classes.date}>
                {props.todaysDetails.date}
            </div>
            <h2 className={classes.city}>{props.todaysDetails.city}</h2>
            <h2 className={classes.temperature}>
                {props.todaysDetails.icon}
                <span>{`${props.todaysDetails.temperature}${props.temperatureType}`}</span>
            </h2>
            <div className={classes.details}>
                <span>Humidity: {props.todaysDetails.humidity}</span>
                <span>
                    Dew point:{" "}
                    {`${props.todaysDetails.dewPoint}${props.temperatureType}`}
                </span>
                <span>Visibility: {props.todaysDetails.visibility}</span>
            </div>
        </Card>
    );
};

export default Main;
