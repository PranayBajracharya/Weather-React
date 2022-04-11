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
  // if(desc === "Rain") {
  //     icon = <TiWeatherShower />;
  // } else if(desc === "Clear") {
  //     icon = <TiWeatherSunny />;
  // } else if(desc === "Haze") {
  //     icon = <BsCloudHaze1 />;
  // } else if(desc === "Clouds") {
  //     icon = <TiWeatherCloudy />;
  // } else if(desc === "Stormy") {
  //     icon = <TiWeatherStormy />;
  // } else {
  //     icon = <TiWeatherPartlySunny />
  // }
  return displayIcon;
};

export default weatherIcon;
