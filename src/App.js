import { Fragment, useState, useEffect } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Week from "./components/Week/Week.js";
import HourlySection from "./components/HourlySection/HourlySection.js";

import convert from "./utilis/convertTemp";
import api from "./api/api.json";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme';

import { Center, Spinner, Stack, Flex } from "@chakra-ui/react";

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
        const { current, daily, hourly } = weatherData;
        const currentData = convert(current, temperatureType);

        const weekData = daily.map((dailyData, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);

            const convertedDailyData = convert(dailyData, temperatureType);
            convertedDailyData.date = date.toString().substring(0, 10);
            return convertedDailyData;
        });

        const hourlyData = hourly.map((hourData) => {
            //Temp conversion
            const convertedHourData = convert(hourData, temperatureType);

            //Unix time to Date object
            const unix_timestamp = hourData.dt;
            const date = new Date(unix_timestamp * 1000);

            //Formatting date
            const time = date.toLocaleString();
            const [formattedDate, formattedTime] = time.split(", ");

            convertedHourData.date = formattedDate;
            convertedHourData.time = formattedTime;
            return convertedHourData;
        });

        mainContent = (
            <Stack className={classes.main}>
                <Flex justify="center">
                    <Main
                        temperatureType={temperatureType}
                        currentData={currentData}
                        city={city}
                        setCity={setCity}
                    />
                    <Week
                        temperatureType={temperatureType}
                        weekData={weekData}
                    />
                </Flex>
                <HourlySection
                    temperatureType={temperatureType}
                    hourlyData={hourlyData}
                />
            </Stack>
        );
    } else if (error) {
        mainContent = (
            <h2 className={classes.loading}>Something went wrong!! :(</h2>
        );
    } else if (isLoading) {
        mainContent = (
            <Center>
                <Spinner
                    color="#282c34"
                    my={3}
                    size="xl"
                    thickness="4px"
                    speed="0.2s"
                />
            </Center>
        );
    }

    return (
        <ChakraProvider theme={theme}>
            <Header
                temperatureType={temperatureType}
                setTemperatureType={setTemperatureType}
            />
            {mainContent}
        </ChakraProvider>
    );
}

export default App;
