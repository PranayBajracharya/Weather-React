import Hourly from "./Hourly/Hourly.js";
import { HStack, VStack, Button } from "@chakra-ui/react";

import { useState } from "react";

const HourlySection = (props) => {
    const [requiredDate, setRequiredDate] = useState(0);
    const { temperatureType, hourlyData } = props;

    const date = new Date();
    date.setDate(date.getDate() + requiredDate);
    const [todaysDate] = date.toLocaleString().split(", ");

    const setToday = () => {
        setRequiredDate(0);
    };
    const setTomorrow = () => {
        setRequiredDate(1);
    };

    const data = hourlyData.filter((dayData) => dayData.date === todaysDate);

    const hourDataList = data.map((hourData) => (
        <Hourly
            key={hourData.dt}
            hourData={hourData}
            temperatureType={temperatureType}
        />
    ));

    return (
        <VStack w="100%">
            <HStack>
                <Button
                    variant={!requiredDate ? "active" : "solid"}
                    onClick={setToday}
                >
                    Today
                </Button>
                <Button
                    variant={requiredDate ? "active" : "solid"}
                    onClick={setTomorrow}
                >
                    Tomorrow
                </Button>
            </HStack>
            <HStack
                spacing="20px"
                w="100%"
                overflowX="auto"
                css={{
                    "&::-webkit-scrollbar": {
                        height: "10px",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        borderRadius: "10px",
                    },
                }}
            >
                {hourDataList}
            </HStack>
        </VStack>
    );
};

export default HourlySection;
