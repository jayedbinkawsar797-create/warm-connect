import { motion } from "framer-motion";
import { Shield, Battery, Wrench, CheckCircle, XCircle, Phone, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const coverageItems = [
  {
    icon: Battery,
    title: "5-Year Battery Warranty",
    desc: "Complete coverage on all lithium battery packs including cells, BMS, and wiring harness.",
  },
  {
    icon: Shield,
    title: "1-Year Frame & Components",
    desc: "Covers the aluminum chassis, suspension, motor, controller, and all major mechanical components.",
  },
  {
    icon: Wrench,
    title: "Solar Panel Coverage",
    desc: "Integrated solar panels covered for defects in materials and workmanship for the full warranty period.",
  },
];

const covered = [
  "Lithium battery pack (5 years)",
  "AC motor and controller",
  "Aluminum frame and chassis",
  "Solar panel system",
  "OEM electrical components",
  "13\" touchscreen display",
  "Factory-installed accessories",
  "Powertrain components",
];

const notCovered = [
  "Normal wear and tear",
  "Cosmetic damage (scratches, dents)",
  "Unauthorized modifications",
  "Damage from misuse or accidents",
  "Third-party accessories",
  "Tires and brake pads",
];

const faqs = [
  {
    q: "How do I make a warranty claim?",
    a: "Contact our support team at (954) 820-4220 or email warranty@zebragolfcart.com. We'll guide you through the process and arrange service at the nearest authorized location.",
  },
  {
    q: "Is the warranty transferable?",
    a: "Yes! The Zebra warranty transfers to the new owner if the cart is sold within the warranty period. Contact us with the sale details to transfer coverage.",
  },
  {
    q: "What maintenance is required to keep the warranty valid?",
    a: "Follow the recommended maintenance schedule in your owner's manual. Key items include periodic tire pressure checks, brake inspection, and keeping the battery charged. No dealer service requirement.",
  },
  {
    q: "Can I service my cart at any dealer?",
    a: "Warranty service should be performed by an authorized Zebra dealer or our factory service team. Contact us for the nearest authorized service location.",
  },
  {
    q: "Does the warranty cover shipping or transportation?",
    a: "Warranty covers parts and labor for covered repairs. Transportation to a service center is the owner's responsibility unless special arrangements are made.",
  },
];

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Peace of Mind</p>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4">
              Warranty <span className="text-gradient-red">Coverage</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every Zebra cart is backed by industry-leading warranty coverage.
              We stand behind our product because we know it's built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage cards */}
      <section className="pb-20 section-charcoal py-24 relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {coverageItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-border/20 bg-section-elevated text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-black text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered / Not Covered */}
      <section className="py-24 section-elevated relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-primary/20 bg-primary/5"
            >
              <h3 className="font-display font-black text-xl text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" /> What's Covered
              </h3>
              <ul className="space-y-3">
                {covered.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border/20 bg-section-charcoal"
            >
              <h3 className="font-display font-black text-xl text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-muted-foreground" /> Not Covered
              </h3>
              <ul className="space-y-3">
                {notCovered.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-dark relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">
              Frequently Asked <span className="text-gradient-red">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border/20 rounded-2xl bg-section-elevated px-6 data-[state=open]:border-primary/20">
                  <AccordionTrigger className="text-sm font-bold text-foreground hover:text-primary py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-4">
            Need Warranty <span className="text-gradient-red">Support?</span>
          </h2>
          <p className="text-muted-foreground mb-8">Our team is ready to assist with any warranty questions or claims.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+19548204220" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest glow-red hover:scale-105 transition-all">
              <Phone className="w-4 h-4" /> Call (954) 820-4220
            </a>
            <a href="mailto:warranty@zebragolfcart.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-foreground/20 font-bold text-sm uppercase tracking-widest text-foreground hover:border-primary/40 transition-all">
              <Mail className="w-4 h-4" /> Email Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warranty;
