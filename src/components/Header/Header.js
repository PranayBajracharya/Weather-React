import { Flex, Heading, Switch } from "@chakra-ui/react";

const Header = (props) => {
    let changedTemperatureType;
    if (props.temperatureType === "C") {
        changedTemperatureType = "F";
    } else {
        changedTemperatureType = "C";
    }
    const temperatureTypeHandler = () => {
        props.setTemperatureType(changedTemperatureType);
    };

    return (
        <Flex
            justify="space-around"
            bg="primary.default"
            alignItems="center"
            h="80px"
        >
            <Heading as="h1" size="3xl">
                Weather React
            </Heading>
            <Flex justify="space-between" alignItems="center" width="200px" fontWeight="bold">
                Celcius
                <Switch colorScheme="primary.default" size="lg" onChange={temperatureTypeHandler} />
                Ferenheit
            </Flex>
        </Flex>
    );
};

export default Header;
