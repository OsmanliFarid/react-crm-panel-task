import HomePage from "./Components/Pages/Home";

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="w-[428px] h-[926px] shadow-2xl rounded-4xl border-2 bg-[#1d2549] border-[#5b5b5b]">
          <HomePage />
        </div>
      </div>
    </>
  );
};

export default App;
