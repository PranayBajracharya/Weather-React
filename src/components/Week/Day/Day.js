import weatherIcon from "../../../utilis/weatherIcon.js";
import { Flex, Text, ListItem } from "@chakra-ui/react";

const Day = (props) => {
    const { dayData, temperatureType } = props;
    const icon = weatherIcon(dayData.weather[0].main);

    return (
        <ListItem display="flex" justifyContent="space-between" height="40px" alignItems="center">
            <Text>{dayData.date}</Text>
            <Flex>
                <Flex display="flex" alignItems="center" fontSize="1.4rem">
                    {icon}
                    <Text ml={2}>{`${dayData.temp.max} / ${dayData.temp.min} °${temperatureType}`}</Text>
                </Flex>
                <Text w="120px" fontSize="0.8rem" textAlign="right" alignSelf="center">{dayData.weather[0].description}</Text>
            </Flex>
        </ListItem>
    );
};

export default Day;