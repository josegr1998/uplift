import { DistributionDetails } from "../../DistributionDetails.types";
import { cn } from "../../../../utils/cn";
import { getStatusColor } from "../../../../utils/getStatusColor";

export const DistributionInfo = ({
  distributionDetails,
}: {
  distributionDetails: DistributionDetails;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-[var(--neutral)] uppercase tracking-wide">
            Region
          </h3>
          <p className="mt-1 text-lg text-[var(--black)]">
            {distributionDetails.region}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[var(--neutral)] uppercase tracking-wide">
            Date
          </h3>
          <p className="mt-1 text-lg text-[var(--black)]">
            {distributionDetails.date}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[var(--neutral)] uppercase tracking-wide">
            Status
          </h3>
          <span
            className={cn(
              "inline-flex px-2 py-1 text-[var(--font-size-xs)] font-medium rounded-full mt-1",
              getStatusColor(distributionDetails.status)
            )}
          >
            {distributionDetails.status}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-[var(--neutral)] uppercase tracking-wide">
            Aid Type
          </h3>
          <p className="mt-1 text-lg text-[var(--black)]">
            {distributionDetails.aidType}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[var(--neutral)] uppercase tracking-wide">
            Delivery Channel
          </h3>
          <p className="mt-1 text-lg text-[var(--black)]">
            {distributionDetails.deliveryChannel}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-[var(--neutral)] uppercase tracking-wide">
            Total Beneficiaries
          </h3>
          <p className="mt-1 text-lg text-[var(--black)]">
            {distributionDetails.beneficiaries.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};
