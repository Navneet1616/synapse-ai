export default function DashboardLoading() {
  return (
    <div className="p-6 space-y-6 w-full">
      {/* Title Skeleton */}
      <div className="h-10 w-48 bg-gray-200 rounded-md animate-pulse" />

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-gray-100 rounded-xl border border-gray-200 p-4 space-y-3">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-16 bg-gray-300 rounded animate-pulse" />
          </div>
        ))}
      </div>

      {/* Main Content Area Skeleton */}
      <div className="space-y-4">
        <div className="h-64 w-full bg-gray-100 rounded-xl border border-gray-200 animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
      </div>
    </div>
  );
}