import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background gradient blob */}
      <div className="absolute right-0 top-1/4 h-[600px] w-[600px] gradient-blob pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Great Food.
              <br />
              <span className="text-primary">Unbeatable Prices.</span>
            </h1>
            
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Reserve specific dishes from top Almaty restaurants at up to 60% off. 
              No waiting, just pick up.
            </p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="gap-3">
                <Apple size={22} strokeWidth={1.5} />
                App Store
              </Button>
              <Button variant="hero-secondary" size="lg" className="gap-3">
                <Play size={22} strokeWidth={1.5} />
                Google Play
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex gap-12"
            >
              <div>
                <p className="text-3xl font-bold tracking-tight text-foreground">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">Partner Restaurants</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight text-foreground">60%</p>
                <p className="mt-1 text-sm text-muted-foreground">Average Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight text-foreground">5min</p>
                <p className="mt-1 text-sm text-muted-foreground">Avg. Pickup Time</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right - Phone Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup Placeholder */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="h-[650px] w-[320px] rounded-[3rem] border-2 border-dashed border-muted-foreground/30 bg-muted/50 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="h-16 w-16 mx-auto rounded-2xl bg-muted-foreground/10 flex items-center justify-center mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Place 3D Phone Mockup Here
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-2">
                      320 × 650px
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-3xl bg-accent/20 blur-2xl" />
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
