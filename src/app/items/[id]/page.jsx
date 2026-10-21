"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useItems } from "@/context/ItemsContext";
import ItemCard from "@/components/ItemCard";
import {
  FiArrowLeft,
  FiCalendar,
  FiTag,
  FiStar,
  FiCheck,
  FiLayers,
} from "react-icons/fi";

function ItemDetailsContent() {
  const params = useParams();
  const { items, getItemById } = useItems();
  const item = getItemById(params?.id);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="text-base-content/70">
          The item you are looking for does not exist or may have been removed.
        </p>
        <Link href="/items" className="btn btn-primary gap-2">
          <FiArrowLeft className="w-4 h-4" /> Back to Items
        </Link>
      </div>
    );
  }

  const relatedItems = items
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div>
        <Link href="/items" className="btn btn-ghost btn-sm gap-2">
          <FiArrowLeft className="w-4 h-4" /> Back to Items
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-base-200 bg-base-200 shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[340px] sm:h-[440px] object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-primary badge-lg gap-1.5 font-medium">
              <FiTag className="w-3.5 h-3.5" /> {item.category}
            </span>
            <span className="badge badge-outline badge-lg gap-1">
              <FiStar className="w-3.5 h-3.5 text-warning fill-warning" /> {item.rating} Rating
            </span>
            <span className="badge badge-ghost badge-lg gap-1.5">
              <FiCalendar className="w-3.5 h-3.5" /> Listed: {item.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">{item.title}</h1>

          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-black text-primary">${item.price}</span>
            {item.priority && (
              <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-base-200">
                Stock Priority: {item.priority}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-bold">Overview</h2>
            <p className="text-base-content/80 leading-relaxed">{item.fullDescription}</p>
          </div>

          <div className="bg-base-200/60 rounded-2xl p-5 border border-base-200 space-y-3">
            <h3 className="font-bold flex items-center gap-2">
              <FiLayers className="w-4 h-4 text-primary" /> Key Specifications
            </h3>
            <ul className="space-y-2">
              {item.specifications?.map((spec, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-base-content/80">
                  <FiCheck className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {relatedItems.length > 0 && (
        <section className="pt-8 border-t border-base-200">
          <h2 className="text-2xl font-bold mb-6">Related in {item.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((related) => (
              <ItemCard key={related.id} item={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function ItemDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      }
    >
      <ItemDetailsContent />
    </Suspense>
  );
}