import {
    FormControl,
    UnorderedList,
    Button,
    Input,
    Flex,
    Text,
} from "@chakra-ui/react";

import { useState } from "react";
import CityList from "./CityList";

const SelectCity = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [cityOptions, setCityOptions] = useState([]);
    const [error, setError] = useState(false);

    const searchValueHandler = (event) => {
        setSearchValue(event.target.value);
    };

    const searchCityHandler = async () => {
        try {
            if (searchValue.trim() === "") {
                return;
            }
            let cities = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=3d4fe1331b4eeb7f11a9e53fa3b7fa36`
            );
            cities = await cities.json();
            setCityOptions(cities);
            document.getElementById("searchResults").style.display = "block";
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    let options;
    if (cityOptions.length > 0) {
        options = cityOptions.map((city) => {
            return (
                <CityList
                    key={city.lat}
                    name={city.name}
                    country={city.country}
                    lat={city.lat}
                    lon={city.lon}
                    changeCityHandler={props.setCity}
                />
            );
        });
    }

    return (
        <Flex direction="column" position="relative">
            <FormControl display="flex">
                <Input
                    type="search"
                    className="dropdown"
                    value={searchValue}
                    onChange={searchValueHandler}
                    css={{
                        position: "relative",
                    }}
                />
                {cityOptions.length > 0 && (
                    <UnorderedList
                        id="searchResults"
                        variant="search"
                        css={{
                            position: "absolute",
                            backgroundColor: "rgba(40, 44, 52, 90%)",
                            zIndex: "5",
                            listStyle: "none",
                            width: "100%",
                            top: "100%",
                            margin: "0",
                            padding: "10px 0",
                            lineHeight: "2rem",
                        }}
                    >
                        {options}
                    </UnorderedList>
                )}
                {cityOptions.length === 0 && (
                    <UnorderedList
                        id="searchResults"
                        display="none"
                    ></UnorderedList>
                )}
                <Button className="dropdown" ml={2} onClick={searchCityHandler}>
                    Search
                </Button>
            </FormControl>
            {error && (
                <Text
                    position="absolute"
                    top="100%"
                    fontSize="14px"
                    color="FFFFFFF"
                >
                    Not Found! Enter city name precisely.
                </Text>
            )}
        </Flex>
    );
};

export default SelectCity;
