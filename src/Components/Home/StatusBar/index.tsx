import { GiNetworkBars } from "react-icons/gi";
import { MdNetworkWifi } from "react-icons/md";
import { CiBatteryFull } from "react-icons/ci";
const StatusBar = () => {
  return (
    <>
      <div className="flex justify-between  max-w-[90%] mx-auto mt-2">
        <div className="">
          <h1 className="font-bold text-xl text-white">1:41</h1>
        </div>
        <div className="flex items-center text-white gap-x-3 text-xl">
          <GiNetworkBars />
          <MdNetworkWifi />
          <CiBatteryFull />
        </div>
      </div>
    </>
  );
};

export default StatusBar;
