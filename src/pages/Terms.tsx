import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Terms of Use
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 7, 2026
            </p>

            <div className="mt-12 space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                <p className="mt-4 leading-relaxed">
                  By accessing or using the ReFreshly mobile application and services, you 
                  agree to be bound by these Terms of Use. If you do not agree to these 
                  terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">2. Description of Service</h2>
                <p className="mt-4 leading-relaxed">
                  ReFreshly provides a marketplace platform connecting users with restaurants 
                  offering surplus food at discounted prices. We facilitate reservations and 
                  pickups but do not directly sell food products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">3. User Accounts</h2>
                <p className="mt-4 leading-relaxed">
                  To use certain features of our service, you must register for an account. 
                  You are responsible for maintaining the confidentiality of your account 
                  credentials and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">4. Payments & Currency</h2>
                <div className="mt-4 rounded-2xl border border-primary/20 bg-green-highlight p-6">
                  <p className="font-semibold text-foreground">
                    All transactions are processed in Kazakhstani Tenge (KZT).
                  </p>
                  <p className="mt-2 text-sm">
                    Prices displayed in the app are in KZT. Payment processing is handled 
                    by our secure payment partners. You agree to pay all fees and charges 
                    associated with your account.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">5. Reservations & Pickups</h2>
                <p className="mt-4 leading-relaxed">
                  When you make a reservation through ReFreshly:
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li>You commit to picking up the order within the specified time window</li>
                  <li>Orders not picked up may be cancelled without refund</li>
                  <li>Product availability is subject to restaurant inventory</li>
                  <li>Prices are final and include all applicable taxes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">6. Cancellation Policy</h2>
                <p className="mt-4 leading-relaxed">
                  You may cancel a reservation up to 1 hour before the pickup window begins 
                  for a full refund. Cancellations made less than 1 hour before pickup or 
                  no-shows are not eligible for refunds.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">7. Intellectual Property</h2>
                <p className="mt-4 leading-relaxed">
                  All content, trademarks, and intellectual property on the ReFreshly 
                  platform are owned by us or our licensors. You may not copy, modify, 
                  distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">8. Limitation of Liability</h2>
                <p className="mt-4 leading-relaxed">
                  ReFreshly is not liable for the quality, safety, or legality of food 
                  products offered by partner restaurants. We act solely as an intermediary 
                  platform connecting users with restaurant partners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">9. Governing Law</h2>
                <p className="mt-4 leading-relaxed">
                  These Terms are governed by the laws of the Republic of Kazakhstan. 
                  Any disputes shall be resolved in the courts of Almaty, Kazakhstan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">10. Contact</h2>
                <p className="mt-4 leading-relaxed">
                  For questions about these Terms, contact us at:
                </p>
                <p className="mt-2 font-semibold text-foreground">legal@refreshly.kz</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
