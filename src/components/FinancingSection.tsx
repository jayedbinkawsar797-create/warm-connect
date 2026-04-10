import { motion } from "framer-motion";
import { DollarSign, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const plans = [
  {
    term: "36 Months",
    rate: "0.00%",
    description: "with 36 Equal Monthly Principal Payments",
    highlight: true,
    badge: "Best Rate",
  },
  {
    term: "60 Months",
    rate: "2.99%",
    description: "with 60 Equal Monthly Principal Payments",
    highlight: false,
    badge: "Popular",
  },
];

const benefits = [
  { icon: DollarSign, title: "Competitive Rates", desc: "Starting at 0% APR for qualified buyers" },
  { icon: Clock, title: "Flexible Terms", desc: "Choose from 36 to 72-month payment plans" },
  { icon: ShieldCheck, title: "Quick Approval", desc: "Get pre-approved in minutes with no impact to credit" },
];

const FinancingSection = () => {
  return (
    <section id="financing" className="relative py-32 section-elevated">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_30%,hsl(var(--zebra-gold)/0.03),transparent)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Effortless Luxury Financing</p>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">
            Ready to <span className="text-gradient-gold">Finance?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Flexible financing options to help you purchase the perfect cart for your lifestyle.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.term}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-3xl border p-10 text-center transition-all duration-500 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-zebra-gold/30 bg-zebra-gold/5 shadow-[0_0_60px_-15px_hsl(var(--zebra-gold)/0.15)]"
                  : "border-border/30 bg-section-charcoal"
              }`}
            >
              {plan.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  plan.highlight
                    ? "bg-zebra-gold text-background"
                    : "bg-section-elevated border border-border/50 text-muted-foreground"
                }`}>
                  {plan.badge}
                </span>
              )}

              <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-3">{plan.term}</p>
              <p className="text-6xl font-display font-black text-foreground mb-2">
                {plan.rate}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Interest Rate</p>
              <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>

              <a
                href="https://dealerdirect.apptraker.com/myaccount/loan"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                  plan.highlight
                    ? "bg-zebra-gold text-background glow-gold"
                    : "border border-zebra-gold/30 text-zebra-gold hover:bg-zebra-gold hover:text-background"
                }`}
              >
                Get Financing <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border/20 bg-section-charcoal hover:border-zebra-gold/20 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-zebra-gold/10 flex items-center justify-center shrink-0">
                <benefit.icon className="w-5 h-5 text-zebra-gold" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;
