import { DistributionDetails } from "./DistributionDetails.types";

interface DistributionDetailsPresentationProps {
  distributionDetails: DistributionDetails | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const DistributionDetailsPresentation = ({
  distributionDetails,
  isLoading,
  error,
}: DistributionDetailsPresentationProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        Error loading distribution details: {error.message}
      </div>
    );
  }

  if (!distributionDetails) {
    return (
      <div className="text-gray-500 p-4 text-center">
        No distribution details found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">
            Distribution Details
          </h1>
          <p className="text-gray-600 mt-1">ID: {distributionDetails.id}</p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Region
                </h3>
                <p className="mt-1 text-lg text-gray-900">
                  {distributionDetails.region}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Date
                </h3>
                <p className="mt-1 text-lg text-gray-900">
                  {distributionDetails.date}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Status
                </h3>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full mt-1 ${distributionDetails.statusColor}`}
                >
                  {distributionDetails.status}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Aid Type
                </h3>
                <p className="mt-1 text-lg text-gray-900">
                  {distributionDetails.aidType}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Delivery Channel
                </h3>
                <p className="mt-1 text-lg text-gray-900">
                  {distributionDetails.deliveryChannel}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Total Beneficiaries
                </h3>
                <p className="mt-1 text-lg text-gray-900">
                  {distributionDetails.beneficiaries.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Beneficiary List */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Beneficiary List ({distributionDetails.beneficiaryList.length}{" "}
              beneficiaries)
            </h3>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {distributionDetails.beneficiaryList.map((beneficiary) => (
                  <div
                    key={beneficiary.id}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          {beneficiary.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ID: {beneficiary.id}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
