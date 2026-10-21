"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useItems } from "@/context/ItemsContext";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";

export default function AddItemPage() {
  const { addItem } = useItems();
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      category: "Keyboards",
      priority: "High",
    },
  });

  const onSubmit = (data) => {
    addItem(data);
    reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showToast && (
          <div className="toast toast-top toast-end z-50">
            <div className="alert alert-success text-success-content shadow-lg">
              <FiCheckCircle className="w-5 h-5" />
              <span>Product added to catalog successfully!</span>
            </div>
          </div>
        )}

        <div className="card bg-base-100 border border-base-200 shadow-lg p-6 sm:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold flex items-center gap-2.5">
              <FiPlusCircle className="text-primary" /> Add New Product
            </h1>
            <p className="text-sm text-base-content/70 mt-1">
              Fill out the details below to publish a new item to the NextGear
              store.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Product Title *
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g. NuPhy Air75 V2 Low-Profile Mechanical Keyboard"
                className={`input input-bordered w-full ${errors.title ? "input-error" : ""}`}
                {...register("title", {
                  required: "Product title is required",
                  minLength: {
                    value: 4,
                    message: "Title must be at least 4 characters",
                  },
                })}
              />
              {errors.title && (
                <span className="text-error text-xs mt-1">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Category *</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("category", { required: true })}
                >
                  <option value="Keyboards">Keyboards</option>
                  <option value="Audio">Audio</option>
                  <option value="Monitors">Monitors</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Price (USD) *
                  </span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="149"
                  className={`input input-bordered w-full ${errors.price ? "input-error" : ""}`}
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 1, message: "Price must be greater than $0" },
                  })}
                />
                {errors.price && (
                  <span className="text-error text-xs mt-1">
                    {errors.price.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Stock Priority
                  </span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register("priority")}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Short Description (1–2 lines) *
                </span>
              </label>
              <input
                type="text"
                placeholder="Brief summary shown on product cards..."
                className={`input input-bordered w-full ${
                  errors.shortDescription ? "input-error" : ""
                }`}
                {...register("shortDescription", {
                  required: "Short description is required",
                  maxLength: {
                    value: 160,
                    message: "Keep under 160 characters",
                  },
                })}
              />
              {errors.shortDescription && (
                <span className="text-error text-xs mt-1">
                  {errors.shortDescription.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Full Description *
                </span>
              </label>
              <textarea
                rows={4}
                placeholder="Detailed description of features, build quality, and ergonomics..."
                className={`textarea textarea-bordered w-full ${
                  errors.fullDescription ? "textarea-error" : ""
                }`}
                {...register("fullDescription", {
                  required: "Full description is required",
                  minLength: {
                    value: 20,
                    message: "Please enter at least 20 characters",
                  },
                })}
              />
              {errors.fullDescription && (
                <span className="text-error text-xs mt-1">
                  {errors.fullDescription.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Key Specifications (One per line, optional)
                </span>
              </label>
              <textarea
                rows={3}
                placeholder={
                  "Switch Type: Gateron Low-Profile\nBattery: 4000mAh\nConnection: 2.4GHz, Bluetooth 5.1, USB-C"
                }
                className="textarea textarea-bordered w-full"
                {...register("specifications")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Image URL (Optional)
                </span>
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                className="input input-bordered w-full"
                {...register("image")}
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full sm:w-auto px-8 gap-2"
              >
                <FiPlusCircle className="w-5 h-5" />
                Submit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}
