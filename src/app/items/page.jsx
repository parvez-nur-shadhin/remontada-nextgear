"use client";

import { useState, useMemo } from "react";
import { useItems } from "@/context/ItemsContext";
import ItemCard from "@/components/ItemCard";
import { FiSearch, FiFilter, FiRefreshCw } from "react-icons/fi";

export default function ItemsPage() {
  const { items } = useItems();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [minRating, setMinRating] = useState("All");

  const categories = ["All", "Keyboards", "Audio", "Monitors", "Accessories"];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesPrice =
        priceRange === "All" ||
        (priceRange === "under200" && item.price < 200) ||
        (priceRange === "200to350" && item.price >= 200 && item.price <= 350) ||
        (priceRange === "above350" && item.price > 350);

      const matchesRating =
        minRating === "All" || item.rating >= Number(minRating);

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [items, searchQuery, selectedCategory, priceRange, minRating]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setPriceRange("All");
    setMinRating("All");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          Hardware Catalog
        </h1>
        <p className="text-base-content/70 mt-2">
          Search and filter through our collection of developer keyboards,
          monitors, and audio gear.
        </p>
      </div>
      <div className="bg-base-200/70 border border-base-300 rounded-2xl p-4 sm:p-6 mb-10 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-1.5">
                <FiSearch className="w-4 h-4 text-primary" /> Search Keyword
              </span>
            </label>
            <input
              type="text"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered w-full bg-base-100"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-1.5">
                <FiFilter className="w-4 h-4 text-primary" /> Category
              </span>
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-bordered w-full bg-base-100"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price Range</span>
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="select select-bordered w-full bg-base-100"
            >
              <option value="All">All Prices</option>
              <option value="under200">Under $200</option>
              <option value="200to350">$200 – $350</option>
              <option value="above350">Above $350</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Min Rating</span>
            </label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className="select select-bordered w-full bg-base-100"
            >
              <option value="All">Any Rating</option>
              <option value="4.8">4.8★ & Above</option>
              <option value="4.7">4.7★ & Above</option>
              <option value="4.5">4.5★ & Above</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-4 border-t border-base-300 text-sm">
          <span className="text-base-content/70">
            Showing{" "}
            <strong className="text-base-content">
              {filteredItems.length}
            </strong>{" "}
            of {items.length} products
          </span>
          {(searchQuery ||
            selectedCategory !== "All" ||
            priceRange !== "All" ||
            minRating !== "All") && (
            <button
              onClick={resetFilters}
              className="btn btn-ghost btn-xs gap-1 text-primary"
            >
              <FiRefreshCw className="w-3.5 h-3.5" /> Reset Filters
            </button>
          )}
        </div>
      </div>
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-base-200/40 rounded-2xl border border-base-200">
          <h3 className="text-xl font-bold">No matching products found</h3>
          <p className="text-base-content/60 mt-1">
            Try adjusting your search keywords or clearing the category and
            price filters.
          </p>
          <button
            onClick={resetFilters}
            className="btn btn-primary btn-sm mt-4"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
