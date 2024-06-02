import { Skeleton } from "@/components/ui/ui/skeleton";
import { Children } from "react";

export default function Loading() {
  return (
    <div className="w-full bg-black min-h-screen">
        <Skeleton/>
    </div>
  )
}