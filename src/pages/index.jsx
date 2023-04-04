import { SideBarMenu } from "@/components";

const Home = () => {
  return (
    <main
      className={`bg-[#eef5ff] flex flex-col items-center justify-center h-screen w-screen`}
    >
      <div
        className={`flex flex-row bg-white w-full max-w-5xl h-full max-h-[600px] rounded-md shadow-xl p-4`}
      >
        <div
          className={`bg-desktop-sidebar bg-no-repeat w-[17rem] rounded-md flex flex-col p-8 gap-6`}
        >
          <SideBarMenu step={1} text={`YOUR INFO`} />
          <SideBarMenu step={2} text={`SELECT PLAN`} />
          <SideBarMenu step={3} text={`ADD-ONS`} />
          <SideBarMenu step={4} text={`SUMMARY`} />
        </div>
      </div>
    </main>
  );
};

export default Home;
