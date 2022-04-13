import Hourly from "./Hourly/Hourly.js";
import { HStack, VStack, Heading } from "@chakra-ui/react";

const HourlySection = (props) => {
    const { temperatureType, hourlyData } = props;
    const hourDataList = hourlyData.map((hourData) => (
        <Hourly
            key={hourData.dt}
            hourData={hourData}
            temperatureType={temperatureType}
        />
    ));
    return (
        <VStack w="100%">
            <Heading color="primary.default" size="lg">
                48-Hour Forecast{" "}
            </Heading>
            <HStack spacing="20px" w="100%" overflowX="auto" css={{
                '&::-webkit-scrollbar': {
                    height: '10px',
                    borderRadius: '10px',
                },                  
                "&::-webkit-scrollbar-thumb": {
                    borderRadius: '10px',
                }
            }}>
                {hourDataList}
            </HStack>
        </VStack>
    );
};

export default HourlySection;
