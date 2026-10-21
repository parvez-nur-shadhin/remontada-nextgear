"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useItems } from "@/context/ItemsContext";
import ItemCard from "@/components/ItemCard";
import {
  FiArrowRight,
  FiShield,
  FiTruck,
  FiZap,
  FiHeadphones,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  const { items } = useItems();
  const featuredItems = items.slice(0, 3);

  const features = [
    {
      icon: <FiZap className="w-6 h-6 text-primary" />,
      title: "Engineered for Speed",
      description: "Ultra-low latency wireless peripherals and high-refresh monitors tested by pros.",
    },
    {
      icon: <FiShield className="w-6 h-6 text-primary" />,
      title: "2-Year Direct Warranty",
      description: "Every hardware item is backed by our comprehensive 24-month replacement guarantee.",
    },
    {
      icon: <FiTruck className="w-6 h-6 text-primary" />,
      title: "Express Global Shipping",
      description: "Same-day dispatch on all in-stock keyboards, monitors, and audio interfaces.",
    },
    {
      icon: <FiHeadphones className="w-6 h-6 text-primary" />,
      title: "24/7 Engineer Support",
      description: "Talk directly to hardware specialists who understand QMK/VIA, docks, and acoustics.",
    },
  ];

  const testimonials = [
    {
      name: "Ariana Vance",
      role: "Staff Frontend Engineer",
      quote:
        "Switching to the Keychron Q1 Pro and LG Ergo monitor from NextGear completely transformed my daily 8-hour coding sessions.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Marcus Chen",
      role: "DevOps Architect",
      quote:
        "The CalDigit TS4 dock powers my dual 4K setup and charges my MacBook Pro with a single cable. Best workstation investment this year.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Rafiqul Islam",
      role: "Full-Stack Developer",
      quote:
        "Fast shipping, authentic studio gear, and super clean product specs. Their curated catalog saves hours of research.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-primary/5 py-16 lg:py-24 border-b border-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
                <FiCheckCircle className="w-4 h-4" />
                <span>2026 Workstation Collection Now Live</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Upgrade Your Desk With{" "}
                <span className="text-primary">Precision Hardware</span>
              </h1>
              <p className="text-base sm:text-lg text-base-content/70 max-w-2xl leading-relaxed">
                Explore hand-picked custom mechanical keyboards, 4K ergonomic displays, and studio
                audio gear crafted to elevate your productivity and comfort.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/items" className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20">
                  Explore Catalog
                  <FiArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/about" className="btn btn-outline btn-lg">
                  Learn About Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-base-300">
                <img
                  src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1000&q=80"
                  alt="Minimalist developer desk workspace"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why NextGear
          </span>
          <h2 className="text-3xl font-bold mt-2">Built for Demanding Workflows</h2>
          <p className="text-base-content/70 mt-2">
            Every product in our catalog passes strict ergonomic and build-quality benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="card bg-base-100 border border-base-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="font-bold text-lg">{feat.title}</h3>
              <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Top Picks
            </span>
            <h2 className="text-3xl font-bold mt-1">Featured Hardware</h2>
          </div>
          <Link href="/items" className="btn btn-outline btn-sm sm:btn-md gap-2 self-start">
            View All {items.length} Products
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="bg-base-200/60 py-16 border-y border-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Community Reviews
            </span>
            <h2 className="text-3xl font-bold mt-2">Loved by Developers Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="card bg-base-100 border border-base-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-warning mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-warning" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-base-content/80 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-base-200">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-base-content/60">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-primary text-primary-content p-8 sm:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Ready to Curate or Manage Your Own Gear?
            </h2>
            <p className="text-primary-content/85 text-base sm:text-lg">
              Sign in to access protected inventory tools, publish new hardware listings, and manage
              catalog items in real time.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/items/add" className="btn bg-base-100 text-base-content hover:bg-base-200 border-none btn-lg">
              Add a Product
            </Link>
            <Link href="/items" className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary btn-lg">
              Browse Items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}