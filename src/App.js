import { Fragment, useState, useReducer } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Week from "./components/Week/Week.js";

// import { ChakraProvider } from '@chakra-ui/react';
import { TiWeatherCloudy } from "react-icons/ti";

const todaysDetails = {
    date: new Date().toLocaleString(),
    city: "London, GB",
    icon: <TiWeatherCloudy />,
    temperature: 8,
    dewPoint: 5,
    humidity: '81%',
    visibility: '10km',
}

const convert = (todaysDetails) => {
    function cToF(cTemp) {
        const cToFahr = (cTemp * 9) / 5 + 32;
        return cToFahr.toFixed(2);
    }

    // function fToC(fTemp) {
    //     const fToCel = ((fTemp - 32) * 5) / 9;
    //     return fToCel.toFixed(2);
    // }

    const convertedTodaysDetails = {
        ...todaysDetails,
    }
    convertedTodaysDetails.temperature = cToF(todaysDetails.temperature);
    convertedTodaysDetails.dewPoint = cToF(todaysDetails.dewPoint);
    return convertedTodaysDetails;
}

const changedTemperatureType = (state, action) => {
    if (action === "°C") {
        return todaysDetails;
    } else {
        return convert(todaysDetails);
    }
}

function App() {
    const [temperatureType, setTemperatureType] = useState("°C");
    const [todayState, dispatchTodayState] = useReducer(changedTemperatureType, todaysDetails);

    return (
        <Fragment>
            <Header
                temperatureType={temperatureType}
                setTemperatureType={setTemperatureType}
                dispatchTodayState={dispatchTodayState}
            />
            <main className={classes.main}>
                <Main
                    temperatureType={temperatureType}
                    todaysDetails={todayState}
                />
                <Week temperatureType={temperatureType} />
            </main>
        </Fragment>
    );
}

export default App;
