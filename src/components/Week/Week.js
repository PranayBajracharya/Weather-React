import classes from "./Week.module.css";
import Card from "../UI/Card.js";
import Day from "./Day/Day.js";

import { convertTemp } from "../../utilis/convertTemp.js";

const Week = (props) => {
    const { temprature } = props;

    // const datas = weekData.map((data) => (
    //     <Day
    //         key={data.date}
    //         data={data}
    //         temperatureType={props.temperatureType}
    //     ></Day>
    // ));

    return (
        <Card className={classes.week}>
            <h2>8-day forecast</h2>
            <ul>{}</ul>
        </Card>
    );
};

export default Week;
