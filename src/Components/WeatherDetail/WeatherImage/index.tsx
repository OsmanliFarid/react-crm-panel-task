import { useContext } from "react";
import { GlobalContext } from "../../../ContextStore/GlobalContext";

const WeatherImage = () => {
  const { WeatherData } = useContext(GlobalContext);
  let weatherImg = "/images/default.png";

  if (WeatherData?.weather?.[0]?.main) {
    switch (WeatherData.weather[0].main) {
      case "Rain":
        weatherImg = "../public/images/rain.png";
        break;
      case "Clear":
        weatherImg = "../public/images/sun.png";
        break;
      case "Clouds":
        weatherImg = "../public/images/clouds.png";
        break;
      case "Snow":
        weatherImg = "../public/images/snowy.png";
        break;
      case "Haze":
      case "Mist":
      case "Fog":
        weatherImg = "../public/images/haze.png";
        break;
      default:
        weatherImg = "../public/images/default.png";
    }
  }

  return (
    <>
      <div className="flex justify-center mt-10">
        <img
          src={weatherImg}
          alt={WeatherData?.weather?.[0]?.description || "weather"}
          className="w-[50%]"
        />
      </div>
      <div className="">
        <h1></h1>
      </div>
    </>
  );
};

export default WeatherImage;
