import { useState, useEffect, useRef } from "react";
import {
    FormControl,
    FormLabel,
    UnorderedList,
    Input,
    Flex,
    Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import CityList from "./CityList";

const SelectCity = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [cityOptions, setCityOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const controller = useRef(null);

    const searchValueHandler = (event) => {
        controller.current && controller.current.abort();
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        const searchCityHandler = async () => {
            try {
                setIsLoading(true);
                if (searchValue.trim() === "") {
                    setCityOptions([]);
                    return;
                }
                controller.current = new AbortController();
    
                let cities = await fetch(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=3d4fe1331b4eeb7f11a9e53fa3b7fa36`,
                    {
                        method: "GET",
                        signal: controller.current.signal,
                    }
                );
                console.log(cities);
    
                cities = await cities.json();
                setCityOptions(cities);
                document.getElementById("searchResults").style.display = "block";
            } catch (error) {}
            setIsLoading(false);
        };
        searchCityHandler();
    }, [searchValue]);

    //function for search city submit/enter
    const setCity = (event) => {
        event.preventDefault();

        if (cityOptions.length > 0) {
            props.setCity({
                name: cityOptions[0].name,
                country: cityOptions[0].country,
                lat: cityOptions[0].lat,
                lon: cityOptions[0].lon,
            });
            setSearchValue("");
        }
    };

    //list of cities search result
    let options;
    if (cityOptions.length > 0) {
        options = cityOptions.map((city, index) => {
            return (
                <CityList
                    key={index}
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
            <form onSubmit={setCity}>
                <FormControl display="flex" alignItems="center">
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
                    <FormLabel fontSize="20px" margin="0 0 0 10px">
                        <BsSearch />
                    </FormLabel>
                </FormControl>
            </form>
            <Text
                position="absolute"
                top="100%"
                fontSize="14px"
                color="FFFFFFF"
            >
                {!isLoading &&
                    cityOptions.length === 0 &&
                    searchValue.trim() !== "" &&
                    "No cities found! Enter city name precisely!"}
            </Text>
        </Flex>
    );
};

export default SelectCity;
