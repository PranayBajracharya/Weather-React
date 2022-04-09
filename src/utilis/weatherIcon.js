import {
    TiWeatherCloudy,
    TiWeatherSunny,
    TiWeatherShower,
    TiWeatherStormy,
    TiWeatherPartlySunny,
} from "react-icons/ti";

const weatherIcon = (desc) => {
    let icon;
    if(desc === "Rain") {
        icon = <TiWeatherShower />;
    } else if(desc === "Clear") {
        icon = <TiWeatherSunny />;
    } else if(desc === "Clouds") {
        icon = <TiWeatherCloudy />;
    } else if(desc === "Stormy") {
        icon = <TiWeatherStormy />;
    } else {
        icon = <TiWeatherPartlySunny />
    }
    return icon;
}

export default weatherIcon;