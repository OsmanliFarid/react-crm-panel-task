import { useContext } from "react";
import { GlobalContext } from "../../ContextStore/GlobalContext";
import HomeButton from "./HomeButton";
import HomeSearch from "./HomeSearch";
import HomeTitleSection from "./HomeTitleSection";
import ImageBackground from "./ImageBackground";
import StatusBar from "./StatusBar";
import WeatherImage from "../WeatherDetail/WeatherImage";

const HomeComponents = () => {
  const { WeatherData } = useContext(GlobalContext);

  return (
    <>
      <div className={`${WeatherData ? "hidden" : "block"} h-full w-full `}>
        <StatusBar />
        <ImageBackground />
        <HomeTitleSection />
        <HomeSearch />
        <HomeButton />
      </div>
      <div className={`${WeatherData ? "block" : "hidden"}`}>
        <StatusBar />
        <WeatherImage />
      </div>
    </>
  );
};

export default HomeComponents;
