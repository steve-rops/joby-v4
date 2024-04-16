import { FaRegHeart } from "react-icons/fa";
import { isNewJob } from "../../../lib/utils";
import NewLabel from "../../../components/ui/NewLabel";

import { FaHeartCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import CategoryLabel from "../../../components/ui/CategoryLabel";

const DetailedInfo = ({ selected }) => {
  const [isLiked, setIsLiked] = useState(false);
  const tags = selected.category.tag.split("-").slice(0, -1);

  console.log(selected);
  return (
    <main className="h-lvh p-3">
      <section className="w-full flex items-center">
        <h3 className="text-lg font-semibold w-[90%]">{selected?.title}</h3>

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

      <div className="flex gap-2 items-center">
        {isNewJob(selected?.created) && <NewLabel />}
        {tags?.map((cat) => (
          <CategoryLabel key={cat} cat={cat} />
        ))}
      </div>
      <div className="text-sm">{selected?.description}</div>
    </main>
  );
};

export default DetailedInfo;
