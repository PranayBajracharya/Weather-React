import {
    TiWeatherCloudy,
    TiWeatherSunny,
    TiWeatherShower,
    TiWeatherStormy,
    TiWeatherPartlySunny,
} from "react-icons/ti";
import { BsCloudHaze1 } from "react-icons/bs";

const weatherIcon = (desc) => {
    let icon = {
        Clear: <TiWeatherSunny />,
        Clouds: <TiWeatherCloudy />,
        Haze: <BsCloudHaze1 />,
        Rain: <TiWeatherShower />,
        Stromy: <TiWeatherStormy />,
    };

    let displayIcon = icon[desc] ?? <TiWeatherPartlySunny />;
    return displayIcon;
};

export default weatherIcon;
