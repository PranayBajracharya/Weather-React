import classes from "./Week.module.css";
import Card from "../UI/Card.js";
import Day from "./Day/Day.js";

const Week = (props) => {
    const { temperatureType, weekData } = props;

    const weekDataList = weekData.map((dayData) => (
        <Day
            key={dayData.date}
            dayData={dayData}
            temperatureType={temperatureType}
        ></Day>
    ));

    return (
        <Card className={classes.week}>
            <h2>8-day forecast</h2>
            <ul>{weekDataList}</ul>
        </Card>
    );
};

export default Week;
