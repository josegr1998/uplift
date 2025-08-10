import { Loader } from "../Loader/Loader";
import { DistributionDetails } from "./DistributionDetails.types";
import { Error } from "../Error/Error";
import { DistributionInfo } from "./components/DistributionInfo/DistributionInfo";
import { DistributionHeader } from "./components/DistributionHeader/DistributionHeader";
import { BeneficiaryList } from "./components/BeneficiaryList/BeneficiaryList";

type Props = {
  distributionDetails: DistributionDetails | undefined;
  isLoading: boolean;
  error: Error | null;
};

export const DistributionDetailsPresentation = ({
  distributionDetails,
  isLoading,
  error,
}: Props) => {
  if (isLoading)
    return (
      <div className="flex justify-center items-center p-8">
        <Loader size="lg" />
      </div>
    );

  if (error)
    return (
      <Error message={`Error loading distribution details: ${error.message}`} />
    );

  if (!distributionDetails)
    return <Error message="No distribution details found." />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-[var(--background)] rounded-lg shadow-lg overflow-hidden">
        <DistributionHeader id={distributionDetails.id} />

        <div className="p-6">
          <DistributionInfo distributionDetails={distributionDetails} />

          <BeneficiaryList
            beneficiaries={distributionDetails.beneficiaryList}
          />
        </div>
      </div>
    </div>
  );
};
