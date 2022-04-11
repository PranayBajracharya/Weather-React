import { Fragment, useState, useEffect, useCallback } from "react";

import classes from "./App.module.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Week from "./components/Week/Week.js";

import api from "./api/api.json";
import { Box, Button, Center, Spinner, Stack, Tag } from "@chakra-ui/react";

function App() {
  const [temperatureType, setTemperatureType] = useState("C");
  const [weatherData, setWeatherData] = useState([]);
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

  return (
    <Fragment>
      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      <Header
        temperatureType={temperatureType}
        setTemperatureType={setTemperatureType}
      />
      {isLoading ? (
        <h2 className={classes.loading}>Loading...</h2>
      ) : error ? (
        <h2 className={classes.loading}>Something went wrong!! :(</h2>
      ) : (
        <main className={classes.main}>
          {weatherData.length > 0 && (
            <>
              <Main
                temperatureType={temperatureType}
                weatherData={weatherData.current}
                city={city}
                setCity={setCity}
              />
              <Week
                temperatureType={temperatureType}
                weeklyDetails={weatherData.daily}
              />
            </>
          )}
        </main>
      )}
      <Stack direction="column" bg="salmon" p="2">
        <Tag size="sm" variant="subtle" w="fit-content">
          Made with ❤️ by
        </Tag>
        <Box>
          <Button variant="ghost" size="sm">
            Daily Updated
          </Button>
        </Box>
      </Stack>
    </Fragment>
  );
}

export default App;
