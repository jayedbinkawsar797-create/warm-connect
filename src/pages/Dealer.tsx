import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Building2, Users, Globe, TrendingUp, Check, DollarSign, Truck, HeadphonesIcon, ShieldCheck } from "lucide-react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cartFrontBlack from "@/assets/cart-front-black.png";

const dealerSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  website: z.string().trim().max(255).optional(),
  state: z.string().trim().min(1, "State is required").max(50),
  city: z.string().trim().min(1, "City is required").max(100),
  businessType: z.enum(["dealership", "rental", "resort", "community", "other"]),
  yearsInBusiness: z.enum(["startup", "1-3", "3-5", "5-10", "10+"]),
  fleetSize: z.enum(["1-10", "10-25", "25-50", "50-100", "100+"]),
  message: z.string().trim().max(1000).optional(),
});

type DealerForm = z.infer<typeof dealerSchema>;

const benefits = [
  { icon: DollarSign, title: "Premium Margins", desc: "Industry-leading wholesale pricing with protected margins on every unit." },
  { icon: Building2, title: "Exclusive Territory", desc: "Protected sales territory with no competing Zebra dealers in your area." },
  { icon: Users, title: "Marketing Support", desc: "Co-op advertising, digital assets, lead generation, and brand materials." },
  { icon: Globe, title: "Growing Market", desc: "LSV market growing 15%+ annually — get in on the ground floor." },
  { icon: Truck, title: "Direct Shipping", desc: "Factory-direct logistics with white-glove delivery to your dealership." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Assigned account manager, training programs, and technical assistance." },
  { icon: ShieldCheck, title: "Warranty Backed", desc: "5-year battery warranty and comprehensive coverage builds customer trust." },
  { icon: TrendingUp, title: "Turnkey Business", desc: "Complete dealer package with inventory financing and floor plan options." },
];

const businessTypes = [
  { id: "dealership", label: "Auto / Cart Dealership" },
  { id: "rental", label: "Rental Company" },
  { id: "resort", label: "Resort / Golf Course" },
  { id: "community", label: "Planned Community" },
  { id: "other", label: "Other" },
];

const yearOptions = [
  { id: "startup", label: "Startup" },
  { id: "1-3", label: "1–3 Years" },
  { id: "3-5", label: "3–5 Years" },
  { id: "5-10", label: "5–10 Years" },
  { id: "10+", label: "10+ Years" },
];

const fleetOptions = [
  { id: "1-10", label: "1–10 Units" },
  { id: "10-25", label: "10–25 Units" },
  { id: "25-50", label: "25–50 Units" },
  { id: "50-100", label: "50–100 Units" },
  { id: "100+", label: "100+ Units" },
];

const Dealer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<DealerForm>({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    state: "",
    city: "",
    businessType: "dealership",
    yearsInBusiness: "1-3",
    fleetSize: "10-25",
    message: "",
  });

  const updateField = (field: keyof DealerForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = dealerSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-lg mx-auto px-6">
            <div className="w-20 h-20 rounded-full bg-zebra-gold/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-zebra-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
              Application <span className="text-gradient-gold">Received!</span>
            </h1>
            <p className="text-muted-foreground mb-8">Thank you for your interest in becoming a Zebra dealer. Our B2B partnerships team will review your application and reach out within 48 hours.</p>
            <a href="/" className="px-8 py-3 rounded-full bg-zebra-gold text-background font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform inline-block">
              Back to Home
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cartFrontBlack} alt="" className="w-full h-full object-cover opacity-10 scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">B2B Partnerships</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6">
              Become a <span className="text-gradient-gold">Zebra Dealer</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Join the fastest-growing luxury LSV brand in America. Exclusive territories,
              premium wholesale pricing, and a product that sells itself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 section-charcoal relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Why Partner With Zebra</p>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">
              Built for <span className="text-gradient-gold">Dealer Success</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl border border-border/20 bg-section-elevated hover:border-zebra-gold/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-zebra-gold/10 flex items-center justify-center mb-4 group-hover:bg-zebra-gold/20 transition-colors">
                  <b.icon className="w-5 h-5 text-zebra-gold" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 section-elevated relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Apply", desc: "Fill out the dealer application form below with your business details." },
              { step: "02", title: "Review", desc: "Our partnerships team reviews your application and schedules a call within 48 hours." },
              { step: "03", title: "Launch", desc: "Get onboarded with inventory, training, marketing assets, and territory assignment." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-5xl font-display font-black text-zebra-gold/20 block mb-4">{s.step}</span>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 section-dark relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <div className="rounded-3xl border border-border/30 bg-section-elevated p-8 md:p-10">
              <h2 className="font-display font-black text-2xl text-foreground mb-2">Dealer Application</h2>
              <p className="text-sm text-muted-foreground mb-8">Fill out the form below and our B2B partnerships team will be in touch.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Business Name *</label>
                    <input type="text" value={form.businessName} onChange={(e) => updateField("businessName", e.target.value)} className="form-input" placeholder="ABC Motors" />
                    {errors.businessName && <p className="text-xs text-primary mt-1">{errors.businessName}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Contact Name *</label>
                    <input type="text" value={form.contactName} onChange={(e) => updateField("contactName", e.target.value)} className="form-input" placeholder="John Doe" />
                    {errors.contactName && <p className="text-xs text-primary mt-1">{errors.contactName}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="form-input" placeholder="john@business.com" />
                    {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Phone *</label>
                    <input type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="form-input" placeholder="(555) 123-4567" />
                    {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Website (Optional)</label>
                  <input type="text" value={form.website} onChange={(e) => updateField("website", e.target.value)} className="form-input" placeholder="https://yourbusiness.com" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">State *</label>
                    <input type="text" value={form.state} onChange={(e) => updateField("state", e.target.value)} className="form-input" placeholder="Florida" />
                    {errors.state && <p className="text-xs text-primary mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">City *</label>
                    <input type="text" value={form.city} onChange={(e) => updateField("city", e.target.value)} className="form-input" placeholder="Miami" />
                    {errors.city && <p className="text-xs text-primary mt-1">{errors.city}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">Business Type *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {businessTypes.map((bt) => (
                      <button key={bt.id} type="button" onClick={() => updateField("businessType", bt.id)}
                        className={`py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 border ${
                          form.businessType === bt.id ? "bg-zebra-gold/10 border-zebra-gold/40 text-foreground" : "bg-section-dark border-border/20 text-muted-foreground hover:border-border/50"
                        }`}>{bt.label}</button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">Years in Business</label>
                    <div className="grid grid-cols-2 gap-2">
                      {yearOptions.map((y) => (
                        <button key={y.id} type="button" onClick={() => updateField("yearsInBusiness", y.id)}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border text-center ${
                            form.yearsInBusiness === y.id ? "bg-zebra-gold/10 border-zebra-gold/40 text-foreground" : "bg-section-dark border-border/20 text-muted-foreground hover:border-border/50"
                          }`}>{y.label}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">Expected Fleet Size</label>
                    <div className="grid grid-cols-2 gap-2">
                      {fleetOptions.map((f) => (
                        <button key={f.id} type="button" onClick={() => updateField("fleetSize", f.id)}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border text-center ${
                            form.fleetSize === f.id ? "bg-zebra-gold/10 border-zebra-gold/40 text-foreground" : "bg-section-dark border-border/20 text-muted-foreground hover:border-border/50"
                          }`}>{f.label}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 block">Additional Information (Optional)</label>
                  <textarea value={form.message} onChange={(e) => updateField("message", e.target.value)} rows={4}
                    className="form-input resize-none" placeholder="Tell us about your business and why you'd like to partner with Zebra..." />
                </div>

                <button type="submit" className="group w-full py-4 rounded-full bg-zebra-gold text-background font-bold text-sm uppercase tracking-widest glow-gold hover:scale-[1.02] transition-all duration-300">
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Submit Dealer Application
                  </span>
                </button>
                <p className="text-center text-[11px] text-muted-foreground">Our B2B team reviews applications within 48 business hours</p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dealer;
