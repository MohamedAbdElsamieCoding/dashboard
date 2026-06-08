import {
  PiMoneyWavyLight,
  PiShoppingBagLight,
  PiUserThin,
} from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";

import Card from "../ui/Card";

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$128,430",
      percentage: "+12%",
      icon: PiMoneyWavyLight,
    },
    {
      title: "Total Orders",
      value: "1,240",
      percentage: "+5%",
      icon: PiShoppingBagLight,
    },
    {
      title: "Total Customers",
      value: "892",
      percentage: "+8%",
      icon: PiUserThin,
    },
    {
      title: "Total Products",
      value: "450",
      percentage: "Active",
      icon: AiOutlineFileDone,
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-4 gap-6">
        {stats.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            percentage={item.percentage}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 p-6">

        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
