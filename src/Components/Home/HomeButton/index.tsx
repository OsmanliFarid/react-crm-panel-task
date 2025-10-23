import { useContext } from "react";
import { GlobalContext } from "../../../ContextStore/GlobalContext";
import { useGetUsersQuery } from "../../../Features/WeatherApi";

const HomeButton = () => {
  const { ActiveSubmit, SetActiveSubmit, SetWeatherData, SearchText } =
    useContext(GlobalContext);
  const data = useGetUsersQuery(SearchText);
  const SubmitClick = async () => {
    SetWeatherData(data.currentData);
    console.log(data.data);

    SetActiveSubmit(!ActiveSubmit);
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
