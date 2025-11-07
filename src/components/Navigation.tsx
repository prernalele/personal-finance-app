import React, { useState } from "react";
import logo from "../assets/images/logo-large.svg";
import overviewIcon from "../assets/images/icon-nav-overview.svg";
import transactionsIcon from "../assets/images/icon-nav-transactions.svg";
import budgetIcon from "../assets/images/icon-nav-budgets.svg";
import potsIcon from "../assets/images/icon-nav-pots.svg";
import recurringBillIcon from "../assets/images/icon-nav-recurring-bills.svg";
import Transactions from "./Transactions";

// interface NavigationProps {
//   logo: string;
// }

const Navigation: React.FC<{}> = () => {
  const [showComponent, setShowComponent] = useState(0);
  type NavItem = { name: string; img: string; component: React.FC<{}> };
  const navItems: NavItem[] = [
    { name: "Overview", img: overviewIcon, component: Transactions },
    {
      name: "Transactions",
      img: transactionsIcon,
      component: Transactions,
    },
    { name: "Budgets", img: budgetIcon, component: Transactions },
    {
      name: "Pots",
      img: potsIcon,
      component: Transactions,
    },
    {
      name: "Recurring bills",
      img: recurringBillIcon,
      component: Transactions,
    },
  ];
  return (
    <div className=" flex flex-row">
      <div className="bg-darkest-grey h-dvh flex flex-col w-[20%] ">
        <div className=" h-[20%]">
          <img src={logo} className="h-12 p-4 m-2" />
        </div>
        <div className="p-2 m-2 flex flex-col space-y-4">
          {navItems.map((eachItem: NavItem, index: number) => {
            // destructuring the component property to get to the Component so that it can be called on onClick
            return (
              <div
                className="text-white hover:bg-white hover:text-darkest-grey p-1"
                key={index}
              >
                {/*eachItem.name.charAt(0).toUpperCase() + eachItem.name.slice(1)*/}
                <div
                  className="flex flex-row items-center"
                  onClick={() => setShowComponent(1)}
                >
                  <img src={eachItem.img} className=" size-4 m-2" />
                  {eachItem.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showComponent ? <Transactions /> : "Overview"}
    </div>
  );
};

export default Navigation;
