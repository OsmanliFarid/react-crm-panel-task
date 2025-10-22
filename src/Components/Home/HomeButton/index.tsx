import { useContext } from "react";
import { GlobalContext } from "../../../ContextStore/GlobalContext";
import axios from "axios";

const HomeButton = () => {
  const { ActiveSubmit, SetActiveSubmit, SearchText, SetWeatherData } =
    useContext(GlobalContext);
  const API_URL_KEY = "53123f2f232fdc830f13c2068acda716";
  const SubmitClick = async () => {
    console.log(SearchText);
    SetActiveSubmit(!ActiveSubmit);

    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${SearchText}&appid=${API_URL_KEY}&units=metric`
      );
      SetWeatherData(data.data);
      console.log("Şəhər:", data.data.name);
      console.log("Temperatur:", data.data.main.temp, "°C");
      console.log("Hava vəziyyəti:", data.data.weather[0].description);
      console.log("Rütubət:", data.data.main.humidity, "%");
      console.log("Şimal-qərb küləyi:", data.data.wind.speed, "m/s");
    } catch (err) {
      alert("not found");
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <button
        className="bg-[#DDB130] text-[#362A84] text-3xl px-30 cursor-pointer py-3 rounded-3xl font-bold"
        onClick={() => SubmitClick()}
      >
        Get Start
      </button>
    </div>
  );
};

export default HomeButton;
