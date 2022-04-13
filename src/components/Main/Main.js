import Card from "../UI/Card.js";
import SelectCity from "../SelectCity/SelectCity.js";

import weatherIcon from "../../utilis/weatherIcon.js";

import { Flex, Input, Text, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";

const Main = (props) => {
    const date = new Date();
    const { currentData } = props;
    const icon = weatherIcon(currentData.weather[0].main);

    return (
        <Flex direction="column">
            <Card>
                {/* <Input type="search" ></Input> */}
                <SelectCity city={props.city} setCity={props.setCity} />
            </Card>
            <Card>
                <Text>{date.toLocaleString()}</Text>
                <Heading>{props.city}, Nepal</Heading>
                <Flex align="center" mt={3} mb={4}>
                    <Heading size="2xl" mr={2}>
                        {icon}
                    </Heading>
                    <Heading size="2xl">{`${currentData.temp}°${props.temperatureType}`}</Heading>
                </Flex>
                <SimpleGrid columns={2} rows={2}>
                    <GridItem>Humidity: {currentData.humidity}%</GridItem>
                    <GridItem>
                        Dew Point:
                        {` ${currentData.dew_point}°${props.temperatureType}`}
                    </GridItem>
                    <GridItem>
                        Visibility: {currentData.visibility / 1000}km
                    </GridItem>
                </SimpleGrid>
            </Card>
        </Flex>
    );
};

export default Main;
