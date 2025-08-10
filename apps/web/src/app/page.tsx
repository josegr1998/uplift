import { DistributionTable } from "packages/ui/web";

export default function Home() {
  return (
    <div className="font-sans pb-20 gap-16 flex justify-center p-6">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Distribution List
        </h2>
        <DistributionTable />
      </main>
    </div>
  );
}
