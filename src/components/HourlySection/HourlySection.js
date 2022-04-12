// import classes from "./HourlySection.module.css";
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
                "&::-webkit-scrollbar": {
                    marginTop: '20px',
                    width: '10px',
                },                
                "&::-webkit-scrollbar-track": {
                    background: '#bbb',
                    borderRadius: '10px',
                },                
                "&::-webkit-scrollbar-thumb": {
                    background: '#282c34',
                    borderRadius: '10px',
                }
            }}>
                {hourDataList}
            </HStack>
        </VStack>
    );
};

export default HourlySection;
