export const ProductCardSkeleton = () => {
  return (
    <div
      className="
        animate-pulse
        rounded-2xl
        border border-white/10
        bg-[var(--color-card)]
        overflow-hidden
      "
    >
      
      <div className="h-56 bg-white/5" />

      
      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 w-3/4 bg-white/10 rounded" />
        <div className="h-3 w-full bg-white/10 rounded" />
        <div className="h-3 w-5/6 bg-white/10 rounded" />
        <div className="h-5 w-1/3 bg-white/10 rounded mt-2" />
      </div>
    </div>
  );
};
