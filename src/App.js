import { Fragment, useState, useEffect, useCallback } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Week from "./components/Week/Week.js";

import api from "./api/api.json";

function App() {
    const [temperatureType, setTemperatureType] = useState("C");
    
    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const weatherDataFunc = useCallback(async () => {
        let response = await fetch(api.kathmandu);
        response = await response.json();
        setWeatherData(response);
        setIsLoading(false);
    }, []);
    
    useEffect(() => {
        weatherDataFunc();
    }, [weatherDataFunc]);


    return (
        <Fragment>
            <Header
                temperatureType={temperatureType}
                setTemperatureType={setTemperatureType}
            />
            {isLoading ? <h2 className={classes.loading}>Loading...</h2> :
                <main className={classes.main}>
                    <Main
                        temperatureType={temperatureType}
                        weatherData={weatherData.current}
                        city={weatherData.timezone}
                    />
                    <Week
                        temperatureType={temperatureType}
                        weeklyDetails={weatherData.daily}
                    />
                </main>
            }
            
        </Fragment>
    );
}

export default App;
