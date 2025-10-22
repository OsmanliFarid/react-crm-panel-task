import HomeButton from "./HomeButton";
import HomeTitleSection from "./HomeTitleSection";
import ImageBackground from "./ImageBackground";
import StatusBar from "./StatusBar";

const HomeComponents = () => {
  return (
    <>
      <div className="h-full w-full ">
        <StatusBar />
        <ImageBackground />
        <HomeTitleSection />
        <HomeButton />
      </div>
    </>
  );
};

export default HomeComponents;
