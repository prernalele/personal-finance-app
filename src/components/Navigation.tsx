import React from "react";
import logo from "../assets/images/logo-large.svg";

// interface NavigationProps {
//   logo: string;
// }

const Navigation: React.FC<{}> = () => {
  type NavItem = { name: string; img: string };
  const navItems: NavItem[] = [
    { name: "Overview", img: "" },
    {
      name: "Transactions",
      img: "",
    },
    { name: "budgets", img: "" },
    {
      name: "recurring bills",
      img: "",
    },
  ];
  return (
    <div className="bg-darkest-grey h-dvh flex flex-col ">
      <div className=" h-[20%]">
        <img src={logo} className="h-12 p-4 m-2" />
      </div>
      <div className="p-2 m-2 flex flex-col space-y-4">
        {navItems.map((eachItem: NavItem) => {
          return (
            <div className="text-white hover:bg-white hover:text-darkest-grey hover:p-1  ">
              {/*eachItem.name.charAt(0).toUpperCase() + eachItem.name.slice(1)*/}
              {eachItem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
