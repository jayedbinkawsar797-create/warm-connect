import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, User, Send, CheckCircle, Phone, Mail } from "lucide-react";

const TestDriveForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", location: "florida" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="testdrive" className="relative py-32 section-dark">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,hsl(var(--primary)/0.03),transparent)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Experience Zebra</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-foreground tracking-tight mb-3">
                Book a <span className="text-gradient-red">Test Drive</span>
              </h2>
              <p className="text-muted-foreground mb-10">
                Visit our Florida or Arizona showroom. Limited slots available!
              </p>

              <div className="rounded-3xl border border-border/30 bg-section-elevated p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-black text-2xl text-foreground mb-2">You're All Set!</h3>
                    <p className="text-muted-foreground">We'll reach out within 24 hours to confirm your test drive.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2.5 uppercase tracking-widest font-bold">
                          <User className="w-3.5 h-3.5" /> Full Name
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="form-input"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2.5 uppercase tracking-widest font-bold">
                          <Mail className="w-3.5 h-3.5" /> Email
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="form-input"
                          placeholder="john@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2.5 uppercase tracking-widest font-bold">
                        <Phone className="w-3.5 h-3.5" /> Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="form-input"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2.5 uppercase tracking-widest font-bold">
                          <Calendar className="w-3.5 h-3.5" /> Preferred Date
                        </label>
                        <input
                          required
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2.5 uppercase tracking-widest font-bold">
                          <MapPin className="w-3.5 h-3.5" /> Location
                        </label>
                        <select
                          value={form.location}
                          onChange={(e) => setForm({ ...form, location: e.target.value })}
                          className="form-input-select"
                        >
                          <option value="florida">Florida Showroom</option>
                          <option value="arizona">Arizona Showroom</option>
                          <option value="atlanta">Atlanta Showroom</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest glow-red hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Schedule My Test Drive
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right — info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="rounded-3xl border border-border/30 bg-section-elevated p-8">
                <h3 className="font-display font-black text-lg text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    "Full guided tour of our showroom",
                    "Test drive any model on our track",
                    "Review financing and customization options",
                    "No obligation — 100% free experience",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
                <p className="font-display font-black text-lg text-foreground mb-2">Prefer to Call?</p>
                <p className="text-sm text-muted-foreground mb-4">Our team is ready to help</p>
                <a
                  href="tel:+19548204220"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  <Phone className="w-4 h-4" /> (954) 820-4220
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDriveForm;
