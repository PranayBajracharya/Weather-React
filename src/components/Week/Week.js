import Card from "../UI/Card.js";
import Day from "./Day/Day.js";

import { Flex, Heading, UnorderedList } from "@chakra-ui/react";

const Week = (props) => {
    const { temperatureType, weekData } = props;

    const weekDataList = weekData.map((dayData) => (
        <Day
            key={dayData.date}
            dayData={dayData}
            temperatureType={temperatureType}
        ></Day>
    ));

    return (
        <Card>
            <Flex direction="column" w={{ base: "auto", md: "60vw" }} maxW="700px">
                <Heading size="lg" mb={1}>8-Day Forecast</Heading>
                <UnorderedList m={0} styleType="none">{weekDataList}</UnorderedList>
            </Flex>
        </Card>
    );
};

export default Week;
