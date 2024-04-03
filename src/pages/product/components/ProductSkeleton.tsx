import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="container py-8 flex items-center justify-around max-lg:flex-col gap-4">
      <Skeleton className="h-96 w-72" />
      <Skeleton className="w-96 h-72 rounded-md" />
    </div>
  );
}
