import Card from "../../UI/Card.js";
import weatherIcon from "../../../utilis/weatherIcon.js";

import { Flex, Heading, Text } from "@chakra-ui/react";


const Hourly = (props) => {
    const { hourData, temperatureType } = props;
    const icon = weatherIcon(hourData.weather[0].main);

    return (
        <Card>
            <Flex direction="column" minWidth="140px" textAlign="center">
                <Heading size="sm">{hourData.date}</Heading>
                <Heading size="sm">{hourData.time}</Heading>
                <Heading fontSize="2.5rem" my={2} display="flex" justifyContent="center" alignItems="center">
                    {icon}
                    <span> {hourData.temp}°{temperatureType}</span>
                </Heading>
                <Text>Humidity: {hourData.humidity}%</Text>
                <Text>Dew Point: {hourData.dew_point}°{temperatureType}</Text>
                <Text>Visibility: {hourData.visibility/1000}km</Text>
                <Heading size="xs" mt={2}>{hourData.weather[0].description}</Heading>
            </Flex>
        </Card>
    );
};

export default Hourly;