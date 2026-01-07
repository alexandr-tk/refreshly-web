import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 7, 2026
            </p>

            <div className="mt-12 space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                <p className="mt-4 leading-relaxed">
                  ReFreshly ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you use our mobile application and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                <p className="mt-4 leading-relaxed">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Order history and preferences</li>
                  <li>Location data (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">3. Data Residency</h2>
                <div className="mt-4 rounded-2xl border border-primary/20 bg-green-highlight p-6">
                  <p className="font-semibold text-foreground">
                    We store personally identifiable information (PII) on servers physically 
                    located in Kazakhstan.
                  </p>
                  <p className="mt-2 text-sm">
                    This ensures compliance with local data protection regulations and 
                    provides you with enhanced data security.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">4. How We Use Your Information</h2>
                <p className="mt-4 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">5. Data Security</h2>
                <p className="mt-4 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, 
                  or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">6. Your Rights</h2>
                <p className="mt-4 leading-relaxed">
                  You have the right to access, correct, or delete your personal information. 
                  You may also object to processing or request data portability. To exercise 
                  these rights, please contact us at privacy@refreshly.kz.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground">7. Contact Us</h2>
                <p className="mt-4 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2 font-semibold text-foreground">privacy@refreshly.kz</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
