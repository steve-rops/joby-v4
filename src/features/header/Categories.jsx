import { useQuery } from "@tanstack/react-query";
import { getJobsCategories } from "../../services/adzunaAPI";
import { ImBooks } from "react-icons/im";
import { MdComputer, MdEventBusy } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { LuWarehouse } from "react-icons/lu";

const Categories = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getJobsCategories,
  });
  console.log(data);

  const categories = [
    { label: "Accounting", logo: <ImBooks /> },
    { label: "IT", logo: <MdComputer /> },
    { label: "Sales", logo: <FaMoneyBillTrendUp /> },
    { label: "Customer Service", logo: <RiCustomerService2Line /> },
    { label: "Engineers", logo: <MdEngineering /> },
    { label: "HR", logo: <GiHumanTarget /> },
    { label: "Healthcare", logo: <MdHealthAndSafety /> },
    { label: "Hospitality", logo: <MdFoodBank /> },
    { label: "Marketing", logo: <RiAdvertisementFill /> },
    { label: "Logistics", logo: <LuWarehouse /> },
  ];

  return (
    <div className="p-2  text-sm font-semibold ">
      <h2>Top Categories:</h2>
      <div className="overflow-x-scroll flex gap-5 p-2">
        {categories?.map((cat) => (
          <div className="flex flex-col items-center " key={cat.label}>
            <span className="text-xl">{cat.logo}</span>
            <h4 className="text-balance text-xs  text-center ">{cat.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
