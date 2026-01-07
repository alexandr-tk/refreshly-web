import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const filters = ["All", "Sushi", "Burger", "Coffee", "Pizza", "Bakery"];

const menuItems = [
  { id: 1, name: "Salmon Roll Set", category: "Sushi", originalPrice: 4500, price: 1800 },
  { id: 2, name: "Classic Burger", category: "Burger", originalPrice: 2800, price: 1200 },
  { id: 3, name: "Cappuccino & Croissant", category: "Coffee", originalPrice: 1800, price: 750 },
  { id: 4, name: "Margherita Pizza", category: "Pizza", originalPrice: 3500, price: 1400 },
  { id: 5, name: "Assorted Pastries", category: "Bakery", originalPrice: 2200, price: 900 },
  { id: 6, name: "Spicy Tuna Roll", category: "Sushi", originalPrice: 3800, price: 1500 },
];

export const LivePreview = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Find exactly what you crave.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse real dishes from restaurants near you
          </p>
        </motion.div>

        {/* Pill Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group card-hover"
            >
              <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-card">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] w-full border-b border-dashed border-muted-foreground/20 bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-3xl">🍽️</span>
                    <p className="mt-2 text-xs text-muted-foreground/60">Food Image</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-foreground">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md transition-all hover:scale-110 hover:shadow-lg">
                      <Plus size={20} strokeWidth={2} />
                    </button>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xl font-bold text-foreground">
                      ₸{item.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₸{item.originalPrice.toLocaleString()}
                    </span>
                    <span className="rounded-full bg-green-highlight px-2.5 py-1 text-xs font-semibold text-primary">
                      {Math.round((1 - item.price / item.originalPrice) * 100)}% off
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
