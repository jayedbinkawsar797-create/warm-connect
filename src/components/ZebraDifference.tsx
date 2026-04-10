import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Elevated Design",
    desc: "Diamond-stitched leather, carbon fiber accents, and premium finishes that rival luxury automobiles.",
  },
  {
    num: "02",
    title: "Unmatched Performance",
    desc: "80–100 mile range, 5KW–7.5KW AC motors, and advanced lithium batteries built for endurance.",
  },
  {
    num: "03",
    title: "Solar Innovation",
    desc: "Integrated solar panel roofs that charge while you're parked — extending your range effortlessly.",
  },
  {
    num: "04",
    title: "Built for the Road",
    desc: "Street-legal with VIN, DOT windshield, signal lights, and full LSV compliance in all 50 states.",
  },
];

const ZebraDifference = () => {
  return (
    <section className="relative py-20 section-charcoal grain-overlay overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
              The Zebra Difference
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1]">
              Built Different.{" "}
              <span className="text-gradient-gold">By Design.</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-lg">
              Every Zebra cart is crafted for those who refuse to settle. From the chassis up,
              we engineer luxury, performance, and innovation into every detail.
            </p>
            <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-zebra-gold to-transparent" />
          </motion.div>

          {/* Right — numbered pillars */}
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group flex gap-6 p-6 rounded-2xl border border-border/10 hover:border-zebra-gold/20 bg-background/40 hover:bg-background/60 transition-all duration-500"
              >
                <span className="text-3xl font-display font-black text-zebra-gold/30 group-hover:text-zebra-gold/60 transition-colors shrink-0">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZebraDifference;
