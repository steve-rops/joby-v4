import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";

import { isNewJob } from "../../../lib/utils";
import NewLabel from "../../../components/ui/NewLabel";
import CategoryLabel from "../../../components/ui/CategoryLabel";
import WageInfo from "./components/WageInfo";
import Description from "./components/Description";
import useCreateLike from "../../../hooks/useCreateLike";

import FullPageLoader from "../../../components/ui/FullPageLoader";
import useLiked from "../../../hooks/useLiked";

const DetailedInfo = ({ selected }) => {
  const {
    data,
    isLoading: isChecking,
    isLiked: isAlreadyLiked,
  } = useLiked(selected.id);

  const [liked, setLiked] = useState(false);

  const tags = selected?.category?.tag?.split("-").slice(0, -1);
  const { mutate: createLike, isLoading } = useCreateLike();

  useEffect(
    function () {
      setLiked(isAlreadyLiked);
    },
    [isAlreadyLiked]
  );

  if (isChecking) return <FullPageLoader />;

  return (
    <main className="h-lvh p-3">
      <section className="w-full flex items-center justify-between ">
        <span className="w-[90%]">
          <h3 className="text-xl font-semibold">{selected?.title}</h3>
        </span>

        <span
          className="cursor-pointer disabled:text-gray-500"
          onClick={() => {
            setLiked((liked) => !liked);
            createLike(selected);
          }}
        >
          {liked ? (
            <FaHeartCircleCheck
              disabled={isLoading}
              className="text-red-500 text-3xl disabled:text-gray-500"
            />
          ) : (
            <FaRegHeart
              disabled={isLoading}
              className="text-red-500 text-2xl disabled:text-gray-500"
            />
          )}
        </span>
      </section>
      <p className="text-sm text-gray-500 pb-3  ">
        located at:
        <span className="text-primary">{selected?.location.display_name}</span>
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

        <Description
          desc={selected?.description}
          url={selected?.redirect_url}
        />
      </section>
    </main>
  );
};

export default DetailedInfo;
