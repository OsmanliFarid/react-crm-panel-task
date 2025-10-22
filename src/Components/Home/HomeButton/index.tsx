import { useContext } from "react";
import { GlobalContext } from "../../../ContextStore/GlobalContext";

const HomeButton = () => {
  const { ActiveSubmit, SetActiveSubmit } = useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => SetActiveSubmit(!ActiveSubmit)}>
        {ActiveSubmit ? "Active" : "Not Active"}
      </button>
    </div>
  );
};

export default HomeButton;
