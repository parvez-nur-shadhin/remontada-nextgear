"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";

export default function ItemCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden group"
    >
      <figure className="relative h-52 w-full overflow-hidden bg-base-200">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 badge badge-primary font-medium shadow">
          {item.category}
        </div>
        <div className="absolute top-3 right-3 badge bg-base-100/90 backdrop-blur text-base-content gap-1 font-semibold shadow-sm">
          <FiStar className="w-3.5 h-3.5 text-warning fill-warning" />
          {item.rating}
        </div>
      </figure>

      <div className="card-body p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="card-title text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-base-content/70 mt-2 line-clamp-2 leading-relaxed">
            {item.shortDescription}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-base-200 flex items-center justify-between">
          <div>
            <span className="text-xs text-base-content/50 block">Price</span>
            <span className="text-xl font-extrabold text-base-content">${item.price}</span>
          </div>
          <Link
            href={`/items/${item.id}`}
            className="btn btn-primary btn-sm sm:btn-md gap-1.5 group/btn"
          >
            View Details
            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}