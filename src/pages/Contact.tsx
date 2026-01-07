import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Users, Building2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    content: "support@refreshly.kz",
    description: "We typically respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+7 701 234 5678",
    description: "Mon-Fri, 9:00 - 18:00",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Bostandyk District",
    description: "Almaty, Kazakhstan",
  },
  {
    icon: Clock,
    title: "Support Hours",
    content: "9:00 - 21:00",
    description: "Every day including weekends",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question? We're here to help.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card-hover"
              >
                <div className="h-full rounded-4xl border border-border bg-card p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <card.icon size={24} strokeWidth={1.5} className="text-primary" />
                  </div>
                  <h3 className="mt-4 font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-foreground">{card.content}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid gap-6 lg:grid-cols-2"
          >
            {/* For Users */}
            <div className="rounded-4xl border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Users size={28} strokeWidth={1.5} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">For Users</h3>
                  <p className="text-muted-foreground">App & order support</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">
                Having trouble with the app, reservations, or need help with an order? 
                Our support team is ready to assist you.
              </p>
              <a
                href="mailto:support@refreshly.kz"
                className="mt-4 inline-block font-semibold text-accent hover:underline"
              >
                support@refreshly.kz
              </a>
            </div>

            {/* For Partners */}
            <div className="rounded-4xl border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Building2 size={28} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">For Partners</h3>
                  <p className="text-muted-foreground">Restaurant inquiries</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">
                Interested in partnering with ReFreshly? Let's discuss how we can help 
                you reduce surplus and reach new customers.
              </p>
              <a
                href="mailto:partners@refreshly.kz"
                className="mt-4 inline-block font-semibold text-primary hover:underline"
              >
                partners@refreshly.kz
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
