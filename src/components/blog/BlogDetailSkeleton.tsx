import { Skeleton } from "@/components/ui/skeleton"

export function BlogDetailSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-60 w-full rounded-lg" />
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  )
}

