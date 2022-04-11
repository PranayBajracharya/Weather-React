//data come in Kelvin
function kToF(K) {
    const F = (K - 273.15) * 1.8 + 32;
    return Math.round(F);
}

function kToC(K) {
    const C = K - 273.15;
    return Math.round(C);
}

const convert = (data, tempType) => {
    const convertedData = {
        ...data
    };

    if (typeof(data.temp) === 'number') { // for current and hourly data
        if (tempType === "C") {
            convertedData.temp = kToC(data.temp);
            convertedData.dew_point = kToC(data.dew_point);
        } else if (tempType === "F") {
            convertedData.temp = kToF(data.temp);
            convertedData.dew_point = kToF(data.dew_point);
        }
    } else if(typeof(data.temp) === 'object') { // for daily data
        if (tempType === "C") {
            convertedData.temp = {
                min: kToC(data.temp.min),
                max: kToC(data.temp.max)
            }
        } else if (tempType === "F") {
            convertedData.temp = {
                min: kToF(data.temp.min),
                max: kToF(data.temp.max)
            }
        }
    }
    return convertedData;
};

export default convert;
