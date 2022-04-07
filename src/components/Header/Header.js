import classes from "./Header.module.css";

const Header = (props) => {
    let changedTemperatureType;
    if(props.temperatureType === "°C") {
        changedTemperatureType = "°F";
    } else {
        changedTemperatureType = "°C";
    }
    const temperatureTypeHandler = () => {
        props.setTemperatureType(changedTemperatureType);
        props.dispatchTodayState(changedTemperatureType);
    };

    return (
        <header className={classes.header}>
            <h1>Weather React</h1>
            <button onClick={temperatureTypeHandler}>{changedTemperatureType}</button>
        </header>
    );
};

export default Header;