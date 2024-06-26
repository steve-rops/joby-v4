import { ImBooks } from "react-icons/im";
import { MdComputer } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { LuWarehouse } from "react-icons/lu";
import Category from "./Category";
import { useSelector } from "react-redux";

const categories = [
  { id: 0, label: "Accounting", logo: <ImBooks /> },
  { id: 1, label: "IT", logo: <MdComputer /> },
  { id: 2, label: "Sales", logo: <FaMoneyBillTrendUp /> },
  { id: 3, label: "Customer Service", logo: <RiCustomerService2Line /> },
  { id: 4, label: "Engineers", logo: <MdEngineering /> },
  { id: 5, label: "HR", logo: <GiHumanTarget /> },
  { id: 6, label: "Healthcare", logo: <MdHealthAndSafety /> },
  { id: 7, label: "Hospitality", logo: <MdFoodBank /> },
  { id: 8, label: "Marketing", logo: <RiAdvertisementFill /> },
  { id: 9, label: "Logistics", logo: <LuWarehouse /> },
];

const Categories = () => {
  const { activeCategoryID } = useSelector((store) => store.category);
  const { query } = useSelector((store) => store.query);

  return (
    <div className="categories pt-3 px-4 text-sm font-semibold overflow-x-scroll ">
      <div className=" flex gap-7">
        {categories?.map((cat) => (
          <Category
            activeID={activeCategoryID}
            query={query}
            key={cat.id}
            cat={cat}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
