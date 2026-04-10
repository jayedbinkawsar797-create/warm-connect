import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Battery, Wrench, CheckCircle, XCircle, Phone, Mail, Send, User, Building2, Ticket, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const coverageItems = [
  { icon: Battery, title: "5-Year Battery Warranty", desc: "Complete coverage on all lithium battery packs including cells, BMS, and wiring harness." },
  { icon: Shield, title: "1-Year Frame & Components", desc: "Covers the aluminum chassis, suspension, motor, controller, and all major mechanical components." },
  { icon: Wrench, title: "Solar Panel Coverage", desc: "Integrated solar panels covered for defects in materials and workmanship for the full warranty period." },
];

const covered = [
  "Lithium battery pack (5 years)", "AC motor and controller", "Aluminum frame and chassis",
  "Solar panel system", "OEM electrical components", '13" touchscreen display',
  "Factory-installed accessories", "Powertrain components",
];

const notCovered = [
  "Normal wear and tear", "Cosmetic damage (scratches, dents)", "Unauthorized modifications",
  "Damage from misuse or accidents", "Third-party accessories", "Tires and brake pads",
];

const faqs = [
  { q: "How do I make a warranty claim?", a: "Contact our support team at (954) 820-4220 or email warranty@zebragolfcart.com. We'll guide you through the process and arrange service at the nearest authorized location." },
  { q: "Is the warranty transferable?", a: "Yes! The Zebra warranty transfers to the new owner if the cart is sold within the warranty period. Contact us with the sale details to transfer coverage." },
  { q: "What maintenance is required to keep the warranty valid?", a: "Follow the recommended maintenance schedule in your owner's manual. Key items include periodic tire pressure checks, brake inspection, and keeping the battery charged. No dealer service requirement." },
  { q: "Can I service my cart at any dealer?", a: "Warranty service should be performed by an authorized Zebra dealer or our factory service team. Contact us for the nearest authorized service location." },
  { q: "Does the warranty cover shipping or transportation?", a: "Warranty covers parts and labor for covered repairs. Transportation to a service center is the owner's responsibility unless special arrangements are made." },
];

const ticketSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(7, "Phone is required"),
  serialNumber: z.string().trim().min(1, "Serial/VIN is required"),
  issueType: z.enum(["battery", "motor", "electrical", "frame", "solar", "other"]),
  description: z.string().trim().min(10, "Please describe the issue in detail"),
  // Dealer-only fields
  dealerName: z.string().optional(),
  dealerAccount: z.string().optional(),
  unitCount: z.string().optional(),
});

type TicketForm = z.infer<typeof ticketSchema>;

const issueTypes = [
  { id: "battery", label: "Battery" },
  { id: "motor", label: "Motor" },
  { id: "electrical", label: "Electrical" },
  { id: "frame", label: "Frame / Chassis" },
  { id: "solar", label: "Solar Panel" },
  { id: "other", label: "Other" },
];

const WarrantyTicketSection = () => {
  const [ticketType, setTicketType] = useState<"individual" | "dealer">("individual");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<TicketForm>({
    name: "", email: "", phone: "", serialNumber: "",
    issueType: "battery", description: "",
    dealerName: "", dealerAccount: "", unitCount: "",
  });

  const updateField = (field: keyof TicketForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = ticketSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    if (ticketType === "dealer" && !form.dealerName?.trim()) {
      setErrors({ dealerName: "Dealer name is required" });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-black text-foreground mb-3">Ticket Submitted!</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Your warranty support ticket has been received. Our {ticketType === "dealer" ? "dealer support" : "customer service"} team will respond within 24 business hours.
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", serialNumber: "", issueType: "battery", description: "", dealerName: "", dealerAccount: "", unitCount: "" }); }}
          className="px-6 py-2.5 rounded-full border border-border/30 text-sm font-bold text-foreground hover:border-primary/40 transition-all">
          Submit Another Ticket
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Type Toggle */}
      <div className="flex rounded-2xl border border-border/30 bg-card/30 p-1 mb-8 max-w-sm mx-auto">
        {[
          { id: "individual" as const, label: "Individual Owner", icon: User },
          { id: "dealer" as const, label: "Dealer", icon: Building2 },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTicketType(t.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              ticketType === t.id ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">
              {ticketType === "dealer" ? "Contact Name" : "Full Name"} *
            </label>
            <input type="text" value={form.name} onChange={(e) => updateField("name", e.target.value)} className="form-input" placeholder="John Doe" />
            {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Email *</label>
            <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="form-input" placeholder="john@email.com" />
            {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Phone *</label>
            <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="form-input" placeholder="(555) 123-4567" />
            {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Serial / VIN Number *</label>
            <input type="text" value={form.serialNumber} onChange={(e) => updateField("serialNumber", e.target.value)} className="form-input" placeholder="ZBR-2025-XXXXX" />
            {errors.serialNumber && <p className="text-xs text-primary mt-1">{errors.serialNumber}</p>}
          </div>
        </div>

        {/* Dealer-only fields */}
        {ticketType === "dealer" && (
          <div className="grid sm:grid-cols-3 gap-5 p-5 rounded-2xl border border-zebra-gold/20 bg-zebra-gold/5">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Dealer Name *</label>
              <input type="text" value={form.dealerName} onChange={(e) => updateField("dealerName", e.target.value)} className="form-input" placeholder="ABC Motors" />
              {errors.dealerName && <p className="text-xs text-primary mt-1">{errors.dealerName}</p>}
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Account #</label>
              <input type="text" value={form.dealerAccount} onChange={(e) => updateField("dealerAccount", e.target.value)} className="form-input" placeholder="DLR-XXXX" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block"># of Affected Units</label>
              <input type="text" value={form.unitCount} onChange={(e) => updateField("unitCount", e.target.value)} className="form-input" placeholder="1" />
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">Issue Type *</label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {issueTypes.map((t) => (
              <button key={t.id} type="button" onClick={() => updateField("issueType", t.id)}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border text-center ${
                  form.issueType === t.id ? "bg-primary/10 border-primary/40 text-foreground" : "bg-section-dark border-border/20 text-muted-foreground hover:border-border/50"
                }`}>{t.label}</button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Issue Description *</label>
          <textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} rows={5}
            className="form-input resize-none" placeholder="Describe the issue in detail including when it started, any error messages, and steps to reproduce..." />
          {errors.description && <p className="text-xs text-primary mt-1">{errors.description}</p>}
        </div>

        <button type="submit" className="group w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest glow-red hover:scale-[1.02] transition-all duration-300">
          <span className="flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Submit Warranty Ticket
          </span>
        </button>
        <p className="text-center text-[11px] text-muted-foreground">We respond to all tickets within 24 business hours</p>
      </form>
    </div>
  );
};

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
      <section className="section-charcoal py-24 relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {coverageItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-border/20 bg-section-elevated text-center">
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
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
              <h3 className="font-display font-black text-xl text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" /> What's Covered
              </h3>
              <ul className="space-y-3">
                {covered.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border/20 bg-section-charcoal">
              <h3 className="font-display font-black text-xl text-foreground mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-muted-foreground" /> Not Covered
              </h3>
              <ul className="space-y-3">
                {notCovered.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-muted-foreground/50 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warranty Ticket Section */}
      <section className="py-24 section-charcoal relative" id="support-ticket">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Ticket className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
              Submit a <span className="text-gradient-red">Support Ticket</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Whether you're an individual owner or an authorized dealer, submit a warranty claim below and our team will get back to you.
            </p>
          </motion.div>
          <WarrantyTicketSection />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-dark relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">
              Frequently Asked <span className="text-gradient-red">Questions</span>
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border/20 rounded-2xl bg-section-elevated px-6 data-[state=open]:border-primary/20">
                  <AccordionTrigger className="text-sm font-bold text-foreground hover:text-primary py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
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
