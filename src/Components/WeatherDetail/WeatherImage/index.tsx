import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../ContextStore/GlobalContext";
import axios from "axios";

const WeatherImage = () => {
  const { WeatherData, SearchText } = useContext(GlobalContext);
  const [data, setdata] = useState([]);
  const [date, setdate] = useState<Date | null>(null);
  let weatherImg = "/images/default.png";
  const API_KEY = "53123f2f232fdc830f13c2068acda716";
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
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${SearchText}&appid=${API_KEY}&units=metric`
      )
      .then(({ data }) => {
        setdata(data);
        const now = new Date();
        setdate(now);
      });
  }, [SearchText]);

  return (
    <>
      <div className="flex justify-center mt-10">
        <img
          src={weatherImg}
          alt={WeatherData?.weather?.[0]?.description || "weather"}
          className="w-[50%]"
        />
      </div>
      <div className="flex items-center flex-col">
        <div className="mt-5  font-medium text-center text-white">
          <h1 className="text-5xl">{WeatherData?.main.temp} °C</h1>
          <h1 className="mt-3 text-3xl">
            {WeatherData?.weather?.[0]?.description}
          </h1>
          <div className="mt-3 flex justify-center gap-x-3 items-center">
            <div className="flex items-center text-2xl gap-x-2">
              <h1>Max:</h1>
              <h1>{WeatherData?.main.temp_max} °</h1>
            </div>
            <div className="flex items-center text-2xl gap-x-2">
              <h1>Min:</h1>
              <h1>{WeatherData?.main.temp_min} °</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img src="../public/images/house.png" alt="" />
      </div>
      <div className="bg-[#3E2D8F] h-50  w-[95%] mx-auto rounded-2xl">
        <div className="">
          <h1>Today</h1>
          <h1>{date?.toLocaleString()}</h1>
        </div>
      </div>
    </>
  );
};

export default WeatherImage;
