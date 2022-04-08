import { Fragment, useState, useEffect, useCallback } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Week from "./components/Week/Week.js";

function App() {
    const [temperatureType, setTemperatureType] = useState("C");
    
    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const weatherDataFunc = useCallback(async () => {
        let response = await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,alerts&lat=27.7172&lon=85.3240&appid=3d4fe1331b4eeb7f11a9e53fa3b7fa36"
        );
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
                // dispatchTodayState={dispatchTodayState}
            />
            {isLoading ? <p>Loading...</p> :
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
