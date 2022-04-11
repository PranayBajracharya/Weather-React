import { Fragment, useState, useEffect } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Week from "./components/Week/Week.js";

import convert from "./utilis/convertTemp";
import api from "./api/api.json";
import { Box, Button, Center, Spinner, Stack, Tag, Flex } from "@chakra-ui/react";

function App() {
    const [temperatureType, setTemperatureType] = useState("C");
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Kathmandu");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const weatherDataFunc = async () => {
            try {
                setIsLoading(true);
                let response = await fetch(api[city]);
                response = await response.json();
                setWeatherData(response);
            } catch (error) {
                setError(true);
            }
            setIsLoading(false);
        };
        weatherDataFunc();
    }, [city]);

    let mainContent = <h2 className={classes.loading}>GG!! :(</h2>;

    if (weatherData !== null) {
        const { current, daily } = weatherData;
        const currentData = convert(current, temperatureType);

        console.log("asda", daily)
        const weekData = daily.map((dailyData, index) => {
            // console.log(temperatureType, weatherData)
            // console.log(dailyData, index);
            const date = new Date();
            date.setDate(date.getDate() + index);

            // const convertedDailyData = convert(dailyData, temperatureType);
            // convertedDailyData.date = date.toString().substring(0, 10);
            // console.log(weatherData.daily)
            // return convertedDailyData;
            return dailyData;
        })
        
        mainContent = (
            <Flex justify="center">
                <Main
                    temperatureType={temperatureType}
                    currentData={currentData}
                    city={city}
                    setCity={setCity}
                />
                <Week
                    temperatureType={temperatureType}
                    weeklyData={weatherData.daily}
                />
            </Flex>
        );
    } else if (error) {
        mainContent = (
            <h2 className={classes.loading}>Something went wrong!! :(</h2>
        );
    } else if (isLoading) {
        mainContent = (
            <Center>
                <Spinner color="#282c34" my={2} size='xl' thickness='4px' speed='0.2s'/>
            </Center>
        );
    }

    return (
        <Fragment>
            <Header
                temperatureType={temperatureType}
                setTemperatureType={setTemperatureType}
            />
            {mainContent}
        </Fragment>
    );
}

export default App;
