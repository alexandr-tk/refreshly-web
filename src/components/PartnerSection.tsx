import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Building2, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Turn surplus inventory into profit",
  "Reach new customers every day",
  "Simple dashboard, zero complexity",
];

export const PartnerSection = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="relative bg-dark-surface py-24 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Turn Surplus into
              <br />
              <span className="text-accent">Revenue.</span>
            </h2>
            
            <p className="mt-6 text-lg text-white/70">
              Join 50+ Almaty restaurants minimizing loss and gaining new customers.
            </p>
            
            {/* Benefits */}
            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent">
                    <Check size={16} strokeWidth={2.5} className="text-accent-foreground" />
                  </div>
                  <span className="text-lg text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-4xl bg-card p-8 shadow-elevated lg:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Become a Partner
              </h3>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and we'll get in touch within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Restaurant Name */}
                <div className="relative">
                  <Building2 size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Restaurant Name"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-secondary/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                
                {/* Owner Name */}
                <div className="relative">
                  <User size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Owner Name"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-secondary/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                
                {/* Phone */}
                <div className="relative">
                  <Phone size={20} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-secondary/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                
                <Button type="submit" variant="accent" size="lg" className="w-full">
                  Request Demo
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
