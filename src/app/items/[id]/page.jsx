import { Suspense } from "react";
import ItemDetailsClient from "@/components/ItemDetailsClient";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];
}

export default async function ItemDetailsPage({ params }) {
  const resolvedParams = await params;

  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      }
    >
      <ItemDetailsClient id={resolvedParams.id} />
    </Suspense>
  );
}