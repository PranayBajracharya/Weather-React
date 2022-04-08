const convert = (todaysDetails) => {
    function cToF(cTemp) {
        const cToFahr = (cTemp * 9) / 5 + 32;
        return Math.round(cToFahr);
    }

    // function fToC(fTemp) {
    //     const fToCel = ((fTemp - 32) * 5) / 9;
    //     return fToCel.toFixed(2);
    // }

    const convertedTodaysDetails = {
        ...todaysDetails,
    };
    convertedTodaysDetails.temperature = cToF(todaysDetails.temperature);
    convertedTodaysDetails.dewPoint = cToF(todaysDetails.dewPoint);
    return convertedTodaysDetails;
};

export function convertTemp(celcious) {
    return (celcious * 9) / 5 + 32;
}

export default convert;