import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxImageDivider from "@/components/ParallaxImageDivider";
import cartWhite from "@/assets/cart-white.webp";
import cartFrontBlack from "@/assets/cart-front-black.png";
import cartFrontBlue from "@/assets/cart-front-blue.jpg";
import cartFrontBurgundy from "@/assets/cart-front-burgundy.png";
import cartFrontGrey from "@/assets/cart-front-grey.png";
import cartDashboard from "@/assets/cart-dashboard.webp";
import cartRearBlack from "@/assets/cart-rear-black.png";
import z1 from "@/assets/z1.webp";
import cartBlack from "@/assets/cart-black.png";

const pillars = [
  { num: "01", title: "Elevated Design", desc: "Diamond-stitched leather seats, carbon fiber dashboards, and ambient LED lighting create an interior that rivals luxury automobiles. Every surface is thoughtfully crafted." },
  { num: "02", title: "Unmatched Performance", desc: "With 80–100 mile range on a single charge, 5KW–7.5KW AC motors, and advanced lithium battery systems, Zebra carts deliver power and endurance you can feel." },
  { num: "03", title: "Sustainable Innovation", desc: "Our integrated solar panel roofs charge while you park. Combined with zero-emission electric drivetrains, we're building a cleaner future without compromising performance." },
  { num: "04", title: "American Craftsmanship", desc: "Designed and engineered in the USA. Every Zebra cart features rust-proof aluminum chassis, automotive-grade components, and meticulous quality control." },
];

const galleryImages = [
  { src: cartFrontBlack, alt: "Zebra cart front view black", span: "col-span-2 row-span-2" },
  { src: cartDashboard, alt: "Zebra premium dashboard", span: "col-span-1 row-span-1" },
  { src: cartFrontBurgundy, alt: "Zebra burgundy front", span: "col-span-1 row-span-1" },
  { src: cartRearBlack, alt: "Zebra rear view", span: "col-span-1 row-span-1" },
  { src: cartFrontGrey, alt: "Zebra gunmetal grey", span: "col-span-1 row-span-1" },
  { src: cartFrontBlue, alt: "Zebra sapphire blue", span: "col-span-2 row-span-1" },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cartBlack} alt="" className="w-full h-full object-cover opacity-10 scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container relative z-10 mx-auto px-6 text-center">
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

      {/* Cart Journey Gallery */}
      <section className="py-20 section-charcoal relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">The Cart Journey</p>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">
              Every Angle, <span className="text-gradient-gold">Every Detail</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${img.span} rounded-2xl overflow-hidden group relative`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax divider */}
      <ParallaxImageDivider image={cartWhite} overlay="gold" height="50vh" />

      {/* Philosophy */}
      <section className="py-24 section-elevated grain-overlay relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
                <span className="text-5xl font-display font-black text-zebra-gold/20 group-hover:text-zebra-gold/40 transition-colors">{p.num}</span>
                <h3 className="font-display font-black text-xl text-foreground mt-4 mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width cart showcase */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Interior Excellence</p>
              <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-6">
                Where Luxury <span className="text-gradient-gold">Lives</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Step inside a Zebra and you'll find diamond-stitched leather seating, a 13" touchscreen infotainment system,
                JBL premium audio, ambient LED lighting, and carbon fiber accents throughout. Every material is selected
                for durability and sophistication.
              </p>
              <ul className="space-y-3">
                {["13\" HD Touchscreen Display", "JBL Premium Sound System", "Diamond-Stitched Leather Seats", "Carbon Fiber Dashboard Accents"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-zebra-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-border/20">
              <img src={cartDashboard} alt="Zebra premium interior dashboard" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second parallax */}
      <ParallaxImageDivider image={z1} title="Stripes of Power" subtitle="Where luxury meets the open road" overlay="red" height="50vh" />

      {/* Fleet showcase */}
      <section className="py-20 section-charcoal relative">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">
              The Full <span className="text-gradient-gold">Fleet</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Five stunning colors, one uncompromising standard of luxury.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { src: cartFrontBlack, label: "Onyx Black" },
              { src: cartFrontBurgundy, label: "Royal Burgundy" },
              { src: cartFrontBlue, label: "Sapphire Blue" },
              { src: cartWhite, label: "Pearl White" },
              { src: cartFrontGrey, label: "Gunmetal Grey" },
            ].map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-border/20 bg-section-elevated hover:border-zebra-gold/20 transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.src} alt={c.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-center text-xs font-bold text-foreground py-3">{c.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
