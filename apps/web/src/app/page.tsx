import Link from "next/link";
import { DistributionTable } from "packages/ui/web";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Distribution List
        </h2>
        <DistributionTable />

        {/* Navigation Links */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Navigation</h3>
          <div className="flex gap-2">
            <Link
              href="/charts"
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
            >
              View Charts
            </Link>
            <Link
              href="/distribution/dst--001"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              View Distribution Details
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
