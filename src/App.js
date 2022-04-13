import { useState, useEffect } from "react";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Week from "./components/Week/Week.js";
import HourlySection from "./components/HourlySection/HourlySection.js";

import convert from "./utilis/convertTemp";

import { ChakraProvider, Heading } from "@chakra-ui/react";
import { Center, Spinner, Stack, Flex } from "@chakra-ui/react";
import theme from "./theme";

document.addEventListener("click", (event) => {
    if (!event.target.matches('.dropdown')) {
        document.getElementById('searchResults').style.display = "none";
    }
});

function App() {
    const [temperatureType, setTemperatureType] = useState("C");
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState({lat: 27.708317, lon: 85.3205817, name: "Kathmandu", country: "NP"});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const weatherDataFunc = async () => {
            try {
                setIsLoading(true);
                let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?exclude=alerts,minutely&lat=${city.lat}&lon=${city.lon}&appid=3d4fe1331b4eeb7f11a9e53fa3b7fa36`);
                response = await response.json();
                setWeatherData(response);
                setError(false);
            } catch (error) {
                setError(true);
            }
            setIsLoading(false);
        };
        weatherDataFunc();
    }, [city]);

    let mainContent = (
        <Heading align="center" mt={5} color="primary.default">
            GG!! Bruh :(
        </Heading>
    );

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
            <Stack w="1200px" maxW="95%" alignSelf="center" mt={4}>
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="center"
                >
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
            <Heading align="center" mt={5} color="primary.default">
                Something went wrong!! :(
            </Heading>
        );
    } else if (isLoading) {
        mainContent = (
            <Center>
                <Spinner
                    color="#282c34"
                    mt={6}
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