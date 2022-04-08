import classes from "./Week.module.css";
import Card from "../UI/Card.js";
import Day from "./Day/Day.js";

import { convertTemp } from "../../utilis/convertTemp.js";

const Week = (props) => {
    const weekData = props.weeklyDetails.map((data, index) => {
        const date = new Date();
        date.setDate(date.getDate() + index);
        
        let day;
        if (props.temperatureType === "C") {
            day = { 
                date: date.toString().substring(0, 10),
                min: Math.round(data.temp.min-273.15),
                max: Math.round(data.temp.max - 273.15),
                main: data.weather[0].main,
                description: data.weather[0].description,
            }
        } else {
            day = { 
                date: date.toString().substring(0, 10),
                min: Math.round(convertTemp(data.temp.min-273.15)),
                max: Math.round(convertTemp(data.temp.max - 273.15)),
                main: data.weather[0].main,
                description: data.weather[0].description,
            }
        }
        return day;
    });

    const datas = weekData.map((data) => (
        <Day
            key={data.date}
            data={data}
            temperatureType={props.temperatureType}
        ></Day>
    ));

    return (
        <Card className={classes.week}>
            <h2>8-day forecast</h2>
            <ul>{datas}</ul>
        </Card>
    );
};

export default Week;
