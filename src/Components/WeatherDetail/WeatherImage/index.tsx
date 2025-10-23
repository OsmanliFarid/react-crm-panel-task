import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../ContextStore/GlobalContext";
import { useWeatherDayQuery } from "../../../Features/WeatherDayApi";

const WeatherImage = () => {
  const { WeatherData, SearchText } = useContext(GlobalContext);
  const [data, setdata] = useState([]);
  const [day, setday] = useState<string | null>("");
  let weatherImg = "/images/default.png";

  const WeatherDataDay = useWeatherDayQuery(SearchText);
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
    if (!WeatherDataDay.data) return;
    let now = new Date();
    let date = now.toLocaleString().split(" ")[0];
    let date2 = date.split(".")[0];
    setday(date2);
    console.log(WeatherDataDay);

    const filtered = WeatherDataDay.data.list.filter((item: any) =>
      item.dt_txt.includes(date2)
    );
    setdata(filtered);
  }, [WeatherData, WeatherDataDay.data]);

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
        <div className="border-b-2 py-2 px-4 text-white text-xl font-bold border-[#8E78C8] flex justify-between">
          <h1 className="">Today</h1>
          <h1 className="">{day}</h1>
        </div>
        <div className="grid grid-cols-3 px-4 pt-4">
          {data.map((item: any, i) => {
            console.log(data);

            let num1 = item.dt_txt.split(" ")[1].split(":")[0];
            let num2 = item.dt_txt.split(" ")[1].split(":")[1];

            return (
              <div
                className="flex justify-items-center w-fit flex-col "
                key={i}
              >
                <div className="flex flex-col items-center">
                  <h1 className="text-white font-bold text-xl">
                    {item?.main?.temp}°C
                  </h1>
                  <img
                    src={weatherImg}
                    alt={WeatherData?.weather?.[0]?.description || "weather"}
                    className="w-[45px] mt-1"
                  />
                  <h1 className="text-xl font-bold text-white mt-1">
                    {num1 + ":" + num2}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeatherImage;
