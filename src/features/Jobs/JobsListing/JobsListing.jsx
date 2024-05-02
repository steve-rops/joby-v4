import JobsSkeleton from "../JobsSkeleton";
import useJobs from "../../../hooks/useJobs";
import MapToggleButton from "../../map/MapToggleButton";
import SingleJob from "./SingleJob";
import Footer from "../../footer/Footer";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import {
  showBtnHideFooter,
  showFooterHideBtn,
} from "../../../components/ui/uiSlice";

const JobsListing = () => {
  const dispatch = useDispatch();
  const { data: jobs, isLoading } = useJobs();
  const { ref } = useInView({
    threshold: 0,
    onChange: (inView) => {
      inView ? dispatch(showFooterHideBtn()) : dispatch(showBtnHideFooter());
    },
  });
  const { footerIsShown, toggleMapBtnIsShown } = useSelector(
    (store) => store.ui
  );

  return (
    <>
      <div className="p-4">
        {isLoading ? (
          <JobsSkeleton />
        ) : (
          <div className="pb-12 space-y-2">
            <div
              ref={ref}
              className="text-center font-mono py-1 bg-primary/10 rounded-lg"
            >
              {jobs?.length} jobs were found
            </div>
            {jobs?.map((job) => (
              <SingleJob job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>
      <div className="transition-all">
        <MapToggleButton display={toggleMapBtnIsShown} />
        <Footer display={footerIsShown} />
      </div>
    </>
  );
};

export default JobsListing;
