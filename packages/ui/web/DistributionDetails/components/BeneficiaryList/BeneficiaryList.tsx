import { Beneficiary } from "../../../../../types/distribution";
import { DistributionDetails } from "../../DistributionDetails.types";

type Props = {
  beneficiaries: Beneficiary[];
};

export const BeneficiaryList = ({ beneficiaries }: Props) => {
  return (
    <div className="border-t border-[var(--input)] pt-6">
      <h3 className="text-lg font-medium text-[var(--black)] mb-4">
        Beneficiary List ({beneficiaries.length} beneficiaries)
      </h3>

      <div className="bg-[var(--accent)] rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {beneficiaries.map(({ id, name }) => (
            <div
              key={id}
              className="bg-[var(--background)] rounded-lg p-4 shadow-sm border border-[var(--input)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[var(--black)]">{name}</p>
                  <p className="text-sm text-[var(--neutral)]">ID: {id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
