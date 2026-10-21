"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiGlobe, FiCheckCircle } from "react-icons/fi";

export default function AboutPage() {
  const stats = [
    { icon: <FiUsers className="w-6 h-6 text-primary" />, label: "Happy Developers", value: "12,500+" },
    { icon: <FiAward className="w-6 h-6 text-primary" />, label: "Curated Products", value: "150+" },
    { icon: <FiGlobe className="w-6 h-6 text-primary" />, label: "Countries Shipped", value: "35+" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-6 space-y-5"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About NextGear
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Designing Better Workspaces for Builders
          </h1>
          <p className="text-base-content/75 leading-relaxed">
            NextGear started with a simple belief: software engineers, designers, and creators spend
            thousands of hours at their desks, yet finding reliable, ergonomic hardware remains
            overwhelming.
          </p>
          <p className="text-base-content/75 leading-relaxed">
            We test every mechanical keyboard, studio microphone, 4K monitor, and Thunderbolt dock
            in real-world development workflows before adding it to our catalog.
          </p>
          <ul className="space-y-2 pt-2">
            {[
              "100% Authentic Hardware Directly From Manufacturers",
              "Curated by Software Engineers & Acoustic Enthusiasts",
              "Seamless Inventory Management Powered by Next.js & Firebase",
            ].map((point, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-sm font-medium">
                <FiCheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-base-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="NextGear engineering team collaborating"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="card bg-base-200/50 border border-base-200 p-6 flex flex-row items-center gap-4"
          >
            <div className="p-4 rounded-2xl bg-primary/10">{s.icon}</div>
            <div>
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="text-sm text-base-content/70">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}