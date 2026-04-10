import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxImageDivider from "@/components/ParallaxImageDivider";
import cartWhite from "@/assets/cart-white.webp";
import z1 from "@/assets/z1.webp";

const pillars = [
  {
    num: "01",
    title: "Elevated Design",
    desc: "Diamond-stitched leather seats, carbon fiber dashboards, and ambient LED lighting create an interior that rivals luxury automobiles. Every surface is thoughtfully crafted.",
  },
  {
    num: "02",
    title: "Unmatched Performance",
    desc: "With 80–100 mile range on a single charge, 5KW–7.5KW AC motors, and advanced lithium battery systems, Zebra carts deliver power and endurance you can feel.",
  },
  {
    num: "03",
    title: "Sustainable Innovation",
    desc: "Our integrated solar panel roofs charge while you park. Combined with zero-emission electric drivetrains, we're building a cleaner future without compromising performance.",
  },
  {
    num: "04",
    title: "American Craftsmanship",
    desc: "Designed and engineered in the USA. Every Zebra cart features rust-proof aluminum chassis, automotive-grade components, and meticulous quality control.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">The Zebra Experience</p>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6">
              You Can <span className="text-gradient-gold">Feel It</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              From the moment you sit behind the wheel, you know this is different.
              The whisper-quiet motor, the premium leather, the seamless technology —
              this is what luxury transportation was meant to be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parallax divider */}
      <ParallaxImageDivider
        image={cartWhite}
        overlay="gold"
        height="50vh"
      />

      {/* Philosophy */}
      <section className="py-32 section-charcoal grain-overlay relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-6">
                Built Different. <span className="text-gradient-gold">By Design.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We didn't set out to build another golf cart. We set out to build the vehicle
                you actually want to drive — one that turns heads, covers ground, and makes
                every trip feel like an occasion.
              </p>
            </motion.div>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-border/20 bg-section-elevated hover:border-zebra-gold/20 transition-all duration-500"
              >
                <span className="text-5xl font-display font-black text-zebra-gold/20 group-hover:text-zebra-gold/40 transition-colors">
                  {p.num}
                </span>
                <h3 className="font-display font-black text-xl text-foreground mt-4 mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second parallax */}
      <ParallaxImageDivider
        image={z1}
        title="Stripes of Power"
        subtitle="Where luxury meets the open road"
        overlay="red"
        height="50vh"
      />

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-6">
              Ready to <span className="text-gradient-red">Experience</span> It?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Book a test drive at one of our showrooms and feel the Zebra difference for yourself.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-demo" className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest glow-red hover:scale-105 transition-all">
                Book a Test Drive
              </Link>
              <Link to="/models" className="px-10 py-4 rounded-full border border-foreground/20 font-bold text-sm uppercase tracking-widest text-foreground hover:border-primary/40 transition-all">
                View Models
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
