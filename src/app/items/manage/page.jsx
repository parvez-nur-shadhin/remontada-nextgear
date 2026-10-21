"use client";

import { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useItems } from "@/context/ItemsContext";
import { FiEye, FiTrash2, FiPlus, FiCheckCircle } from "react-icons/fi";

export default function ManageItemsPage() {
  const { items, deleteItem } = useItems();
  const [toastMsg, setToastMsg] = useState("");

  const handleDelete = (id, title) => {
    deleteItem(id);
    setToastMsg(`Removed "${title}" from catalog.`);
    setTimeout(() => setToastMsg(""), 3500);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {toastMsg && (
          <div className="toast toast-top toast-end z-50">
            <div className="alert alert-info shadow-lg">
              <FiCheckCircle className="w-5 h-5" />
              <span>{toastMsg}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold">Manage Products</h1>
            <p className="text-sm text-base-content/70 mt-1">
              View details or remove products from your active store inventory ({items.length} total).
            </p>
          </div>
          <Link href="/items/add" className="btn btn-primary gap-2 self-start">
            <FiPlus className="w-4 h-4" /> Add New Product
          </Link>
        </div>
        <div className="hidden md:block bg-base-100 border border-base-200 rounded-2xl shadow-sm overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-sm text-base-content/70">
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Priority</th>
                <th>Date Added</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="hover">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 bg-base-200">
                          <img src={item.image} alt={item.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold line-clamp-1 max-w-xs">{item.title}</div>
                        <div className="text-xs text-base-content/60 line-clamp-1 max-w-xs">
                          {item.shortDescription}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-primary badge-outline">{item.category}</span>
                  </td>
                  <td className="font-bold">${item.price}</td>
                  <td>
                    <span className="badge badge-ghost badge-sm">{item.priority || "Normal"}</span>
                  </td>
                  <td className="text-sm text-base-content/70">{item.date}</td>
                  <td>
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/items/${item.id}`}
                        className="btn btn-ghost btn-sm gap-1 text-primary"
                      >
                        <FiEye className="w-4 h-4" /> View
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id, item.title)}
                        className="btn btn-ghost btn-sm gap-1 text-error hover:bg-error/10"
                      >
                        <FiTrash2 className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 border border-base-200 p-4 shadow-sm space-y-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <span className="badge badge-primary badge-xs">{item.category}</span>
                  <h3 className="font-bold text-base truncate mt-0.5">{item.title}</h3>
                  <p className="text-sm font-extrabold text-primary">${item.price}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-base-200">
                <Link href={`/items/${item.id}`} className="btn btn-outline btn-sm gap-1">
                  <FiEye className="w-4 h-4" /> View
                </Link>
                <button
                  onClick={() => handleDelete(item.id, item.title)}
                  className="btn btn-error btn-outline btn-sm gap-1"
                >
                  <FiTrash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}