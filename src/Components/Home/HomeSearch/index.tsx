import { useContext } from "react";
import { GlobalContext } from "../../../ContextStore/GlobalContext";

const HomeSearch = () => {
  const { SearchText, SetSearchText } = useContext(GlobalContext);

  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        value={SearchText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          SetSearchText(e.target.value)
        }
        placeholder="local"
        className="w-[370px] h-[55px] rounded-3xl px-2 text-2xl text-white outline-none border-2 border-amber-300"
      />
    </div>
  );
};

export default HomeSearch;
