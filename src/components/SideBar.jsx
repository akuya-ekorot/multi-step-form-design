import { SideBarMenu } from "./";

const SideBar = () => {
  return (
    <div
      className={`bg-desktop-sidebar bg-no-repeat w-[17rem] rounded-md flex flex-col p-8 gap-6`}
    >
      <SideBarMenu step={1} text={`YOUR INFO`} />
      <SideBarMenu step={2} text={`SELECT PLAN`} />
      <SideBarMenu step={3} text={`ADD-ONS`} />
      <SideBarMenu step={4} text={`SUMMARY`} />
    </div>
  );
};

export default SideBar;
