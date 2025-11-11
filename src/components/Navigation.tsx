import React, { useState } from "react";
import logo from "../assets/images/logo-large.svg";
import { Link } from "react-router-dom";
import overviewIcon from "../assets/images/icon-nav-overview.svg";
import transactionsIcon from "../assets/images/icon-nav-transactions.svg";
import budgetIcon from "../assets/images/icon-nav-budgets.svg";
import potsIcon from "../assets/images/icon-nav-pots.svg";
import recurringBillIcon from "../assets/images/icon-nav-recurring-bills.svg";

// interface NavigationProps {
//   logo: string;
// }

const Navigation: React.FC<{}> = () => {
  const [showComponent, setShowComponent] = useState(0);
  type NavItem = { name: string; img: string; linkTo: string };
  const navItems: NavItem[] = [
    { name: "Overview", img: overviewIcon, linkTo: "/overview" },
    {
      name: "Transactions",
      img: transactionsIcon,
      linkTo: "/transactions",
    },
    { name: "Budgets", img: budgetIcon, linkTo: "/budgets" },
    {
      name: "Pots",
      img: potsIcon,
      linkTo: "/pots",
    },
    {
      name: "Recurring bills",
      img: recurringBillIcon,
      linkTo: "/recurringbills",
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
            const { name, img, linkTo } = eachItem;
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
                  <img src={img} className=" size-4 m-2" />
                  <Link to={linkTo}>{name}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
