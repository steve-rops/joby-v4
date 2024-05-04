import { FaRegHeart } from "react-icons/fa";
import { isNewJob } from "../../../lib/utils";
import NewLabel from "../../../components/ui/NewLabel";

import { FaHeartCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import CategoryLabel from "../../../components/ui/CategoryLabel";
import WageInfo from "./WageInfo";
import Description from "./Description";

const DetailedInfo = ({ selected }) => {
  const [isLiked, setIsLiked] = useState(false);
  const tags = selected?.category?.tag?.split("-").slice(0, -1);
  console.log(selected);

  return (
    <main className="h-lvh p-3">
      <section className="w-full flex items-center justify-between ">
        <span className="w-[90%]">
          <h3 className="text-xl font-semibold">{selected?.title}</h3>
        </span>

        <span
          className="cursor-pointer"
          onClick={() => setIsLiked((liked) => !liked)}
        >
          {isLiked ? (
            <FaHeartCircleCheck className="text-red-500 text-2xl" />
          ) : (
            <FaRegHeart className="text-red-500 text-xl" />
          )}
        </span>
      </section>
      <p className="text-sm text-gray-500 pb-3  ">
        located at:{" "}
        <span className="text-primary">{selected.location.display_name}</span>
      </p>

      <div className="flex gap-2 items-center">
        {isNewJob(selected?.created) && <NewLabel />}
        {tags?.map((cat) => (
          <CategoryLabel key={cat} cat={cat} />
        ))}
      </div>

      <section className="space-y-3">
        <WageInfo
          salaryMin={selected?.salary_min}
          salaryMax={selected?.salary_max}
        />

        <Description desc={selected?.description} url={selected.redirect_url} />
      </section>
    </main>
  );
};

export default DetailedInfo;
