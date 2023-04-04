import { SideBar, Step } from "@/components";

const Home = () => {
  return (
    <main
      className={`bg-[#eef5ff] flex flex-col items-center justify-center h-screen w-screen`}
    >
      <div
        className={`flex flex-row bg-white w-full max-w-5xl h-full max-h-[600px] rounded-md shadow-xl p-4`}
      >
        <SideBar />
        <Step />
      </div>
    </main>
  );
};

export default Home;
