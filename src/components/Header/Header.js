import classes from "./Header.module.css";

const Header = (props) => {
    let changedTemperatureType;
    if (props.temperatureType === "C") {
        changedTemperatureType = "F";
    } else {
        changedTemperatureType = "C";
    }
    const temperatureTypeHandler = () => {
        props.setTemperatureType(changedTemperatureType);
    };

    return (
        <header className={classes.header}>
            <h1>Weather React</h1>
            <button onClick={temperatureTypeHandler}>
                °{props.temperatureType}
            </button>
        </header>
    );
};

export default Header;
