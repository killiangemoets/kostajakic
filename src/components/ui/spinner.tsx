import { cn } from "@/utils/tailwind";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full flex justify-center py-8", className)}>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse-1"></div>
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse-2"></div>
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse-3"></div>
      </div>
    </div>
  );
};

export default Spinner;
