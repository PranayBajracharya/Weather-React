import { Flex, Heading, Button } from "@chakra-ui/react";

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
        <Flex justify="space-around" bg="primary.default" alignItems="center" h="80px">
            <Heading as="h1" size="3xl">
                Weather React
            </Heading>
            <Button
                color="primary.default"
                bg="secondary.default"
                borderRadius="50%"
                w="50px"
                h="50px"
                fontSize="1.6rem"
                onClick={temperatureTypeHandler}
            >
                °{props.temperatureType}
            </Button>
        </Flex>
    );
};

export default Header;
