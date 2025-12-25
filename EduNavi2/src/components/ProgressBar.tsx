import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({ progress, size = "md", showLabel = true, className }: ProgressBarProps) {
  const heightClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("progress-bar", heightClasses[size])}>
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-1 text-xs text-muted-foreground font-medium">
          {progress}% Complete
        </p>
      )}
    </div>
  );
}
