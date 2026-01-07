import { motion } from "framer-motion";
import { Check, X, DollarSign, Clock, Eye, Zap } from "lucide-react";

const comparisons = [
  {
    icon: DollarSign,
    feature: "Cost",
    refreshly: "Up to 60% Off",
    others: "Full Price + Fees",
  },
  {
    icon: Clock,
    feature: "Wait Time",
    refreshly: "Instant Pick-up",
    others: "30-60 min wait",
  },
  {
    icon: Eye,
    feature: "Transparency",
    refreshly: "Exact Dishes",
    others: "Mystery/Random",
  },
  {
    icon: Zap,
    feature: "Experience",
    refreshly: "Reserve & Go",
    others: "Order & Wait",
  },
];

export const ComparisonTable = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {/* Card Container */}
          <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-elevated">
            {/* Header */}
            <div className="border-b border-border bg-secondary/30 px-8 py-6">
              <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why choose ReFreshly?
              </h2>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-border">
              <div className="px-6 py-4">
                <span className="text-sm font-semibold text-muted-foreground">Feature</span>
              </div>
              <div className="bg-green-highlight px-6 py-4 text-center">
                <span className="text-sm font-bold text-primary">ReFreshly</span>
              </div>
              <div className="px-6 py-4 text-center">
                <span className="text-sm font-semibold text-muted-foreground">Others</span>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`grid grid-cols-3 ${
                  index !== comparisons.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* Feature Column */}
                <div className="flex items-center gap-3 px-6 py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <row.icon size={20} strokeWidth={1.5} className="text-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{row.feature}</span>
                </div>

                {/* ReFreshly Column (Winner) */}
                <div className="flex items-center justify-center gap-2 bg-green-highlight px-6 py-5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <Check size={14} strokeWidth={2.5} className="text-primary-foreground" />
                  </div>
                  <span className="font-bold text-primary">{row.refreshly}</span>
                </div>

                {/* Others Column (Loser) */}
                <div className="flex items-center justify-center gap-2 px-6 py-5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                    <X size={14} strokeWidth={2} className="text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{row.others}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
