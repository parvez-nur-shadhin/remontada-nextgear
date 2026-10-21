"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { initialItems } from "@/data/initialItems";

const ItemsContext = createContext(null);
const STORAGE_KEY = "nextgear_items_v1";

export function ItemsProvider({ children }) {
  const [items, setItems] = useState(initialItems);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialItems));
      }
    } catch (error) {
      console.error("Failed to read from localStorage:", error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const addItem = (newItemData) => {
    const newItem = {
      ...newItemData,
      id: Date.now().toString(),
      price: Number(newItemData.price),
      rating: Number(newItemData.rating || 4.8),
      date: newItemData.date || new Date().toISOString().split("T")[0],
      image:
        newItemData.image?.trim() ||
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
      specifications: newItemData.specifications
        ? newItemData.specifications.split("\n").filter(Boolean)
        : [
            "Warranty: 1 Year Official Warranty",
            "Build Quality: Premium Grade Materials",
            "Connectivity: Universal Plug & Play",
          ],
    };

    const updated = [newItem, ...items];
    setItems(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newItem;
  };

  const deleteItem = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getItemById = (id) => {
    return items.find((item) => String(item.id) === String(id));
  };

  return (
    <ItemsContext.Provider value={{ items, isInitialized, addItem, deleteItem, getItemById }}>
      {children}
    </ItemsContext.Provider>
  );
}

export const useItems = () => useContext(ItemsContext);