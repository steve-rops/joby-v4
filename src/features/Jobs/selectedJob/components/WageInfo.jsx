import { formatCurrency } from "../../../../lib/utils";

const WageInfo = ({ salaryMin, salaryMax }) => {
  return (
    <section className="mt-3">
      <h4 className="text-lg font-bold">Wage info:</h4>
      <div className="w-full h-[35%] bg-primary/15 flex rounded-lg p-2  ">
        {!salaryMin ? (
          <span>Contact Employer</span>
        ) : (
          <>
            <div className="flex flex-col items-center w-[50%] border-r border-primary">
              <span className="text-lg">From</span>
              <span className="text-xl text-primary">
                {formatCurrency(salaryMin)} /yr
              </span>
            </div>
            <div className="flex flex-col items-center w-[50%]">
              <span className="text-lg">Up to</span>
              <span className="text-xl text-primary">
                {formatCurrency(salaryMax)} /yr
              </span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WageInfo;
