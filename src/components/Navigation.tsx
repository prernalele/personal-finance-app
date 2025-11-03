import React from "react";
import logo from "../assets/images/logo-large.svg";
import overviewIcon from "../assets/images/icon-nav-overview.svg";
import transactionsIcon from "../assets/images/icon-nav-transactions.svg";
import budgetIcon from "../assets/images/icon-nav-budgets.svg";
import potsIcon from "../assets/images/icon-nav-pots.svg";
import recurringBillIcon from "../assets/images/icon-nav-recurring-bills.svg";

// interface NavigationProps {
//   logo: string;
// }

const Navigation: React.FC<{}> = () => {
  type NavItem = { name: string; img: string };
  const navItems: NavItem[] = [
    { name: "Overview", img: overviewIcon },
    {
      name: "Transactions",
      img: transactionsIcon,
    },
    { name: "Budgets", img: budgetIcon },
    {
      name: "Pots",
      img: potsIcon,
    },
    {
      name: "Recurring bills",
      img: recurringBillIcon,
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
            <div className="text-white hover:bg-white hover:text-darkest-grey p-1  ">
              {/*eachItem.name.charAt(0).toUpperCase() + eachItem.name.slice(1)*/}
              <div className="flex flex-row items-center ">
                <img src={eachItem.img} className=" size-4 m-2" />
                {eachItem.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
