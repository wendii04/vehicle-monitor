function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-32 bg-slate-300 rounded-xl"></div>

      <div className="h-[500px] bg-slate-300 rounded-xl"></div>

      <div className="h-40 bg-slate-300 rounded-xl"></div>
    </div>
  );
}

export default LoadingSkeleton;