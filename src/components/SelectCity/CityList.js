import { ListItem, Text } from "@chakra-ui/react";

const CityList = (props) => {
    const selectCityHandler = () => {
        props.changeCityHandler({
            name: props.name,
            country: props.country,
            lat: props.lat,
            lon: props.lon,
        });
    };

    return (
        <ListItem
            display="flex"
            justifyContent="space-between"
            padding="0 10px"
            _hover={{
                backgroundColor: "#121417",
            }}
            onClick={selectCityHandler}
        >
            <Text>
                {props.name}, {props.country}
            </Text>
            <Text>
                {props.lat.toFixed(3)}, {props.lon.toFixed(3)}
            </Text>
        </ListItem>
    );
};

export default CityList;
