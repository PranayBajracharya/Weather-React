import classes from "./HourlySection.module.css";
import Hourly from "./Hourly/Hourly.js";
import {
    HStack,
    VStack,
} from "@chakra-ui/react";

const HourlySection = (props) => {
    const { temperatureType, hourlyData } = props;
    const hourDataList = hourlyData.map(hourData => (
        <Hourly 
            key={hourData.dt}
            hourData={hourData}
            temperatureType={temperatureType}
        />
    ));
    return (
        <VStack w='inherit'>
            <h2 className={classes['hourly-heading']}>48-Hour Forecast </h2>
            <HStack spacing='20px' className={classes.hourly}>
                {hourDataList}
            </HStack>
        </VStack>
    );
};

export default HourlySection;