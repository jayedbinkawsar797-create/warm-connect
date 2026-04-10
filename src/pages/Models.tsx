import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, Gauge, Zap, Sun, Shield, Monitor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cartAngle1 from "@/assets/cart-angle1.png";
import cartAngle2 from "@/assets/cart-angle2.png";
import cartAngle3 from "@/assets/cart-angle3.png";

const models = [
  {
    id: "breeze-4l",
    image: cartAngle1,
    name: "Breeze 4L",
    tagline: "The Perfect Entry to Luxury",
    seats: "4-Seater",
    price: "$14,999",
    specs: [
      { icon: Battery, label: "Battery", value: "51.2V 150Ah Lithium" },
      { icon: Gauge, label: "Top Speed", value: "25 MPH" },
      { icon: Zap, label: "Range", value: "80+ Miles" },
      { icon: Sun, label: "Solar Roof", value: "Integrated" },
      { icon: Shield, label: "Warranty", value: "5-Year Battery" },
      { icon: Monitor, label: "Display", value: '13" Touchscreen' },
    ],
    features: ["Street Legal with VIN", "4K Backup Camera", "Diamond-Stitched Seats", "Carbon Fiber Dash", "Wireless Apple CarPlay", "4-Speaker Bluetooth Audio"],
  },
  {
    id: "terrain-6",
    image: cartAngle2,
    name: "Terrain 6",
    tagline: "Built for the Whole Family",
    seats: "6-Seater",
    price: "$17,999",
    featured: true,
    specs: [
      { icon: Battery, label: "Battery", value: "51.2V 230Ah Lithium" },
      { icon: Gauge, label: "Top Speed", value: "25 MPH" },
      { icon: Zap, label: "Range", value: "100+ Miles" },
      { icon: Sun, label: "Solar Roof", value: "Integrated" },
      { icon: Shield, label: "Warranty", value: "5-Year Battery" },
      { icon: Monitor, label: "Display", value: '13" Touchscreen' },
    ],
    features: ["Street Legal with VIN", "4K Backup Camera", "Diamond-Stitched Seats", "Carbon Fiber Dash", "Wireless Apple CarPlay", "Rear-Facing 2nd Row"],
  },
  {
    id: "terrain-6-pro",
    image: cartAngle3,
    name: "Terrain 6 Pro",
    tagline: "Maximum Power, Zero Compromise",
    seats: "6-Seater Pro",
    price: "$19,999",
    specs: [
      { icon: Battery, label: "Battery", value: "73.6V 205Ah Lithium" },
      { icon: Gauge, label: "Top Speed", value: "30 MPH" },
      { icon: Zap, label: "Range", value: "100+ Miles" },
      { icon: Sun, label: "Solar Roof", value: "Integrated" },
      { icon: Shield, label: "Warranty", value: "5-Year Battery" },
      { icon: Monitor, label: "Display", value: '13" Touchscreen' },
    ],
    features: ["Street Legal with VIN", "7.5KW AC Motor", "Diamond-Stitched Seats", "Carbon Fiber Dash", "Wireless Apple CarPlay", "Premium Suspension"],
  },
];

const Models = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Lineup</p>
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4">
              Luxury in <span className="text-gradient-gold">Motion</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Three models, one mission: redefine what a golf cart can be.
              Solar-powered, street-legal, and built with uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models */}
      {models.map((model, idx) => (
        <section key={model.id} className={`py-24 ${idx % 2 === 0 ? "section-charcoal" : "section-elevated"} relative`}>
          <div className="absolute top-0 left-0 right-0 section-divider" />
          <div className="container mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                {model.featured && (
                  <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-zebra-gold text-background text-[10px] font-bold uppercase tracking-widest">
                    Flagship
                  </div>
                )}
                <div className="aspect-[4/3] relative">
                  <img src={model.image} alt={model.name} className="w-full h-full object-contain" />
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? "lg:col-start-1" : ""}
              >
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{model.seats}</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground tracking-tight mt-2 mb-2">
                  {model.name}
                </h2>
                <p className="text-muted-foreground text-lg mb-2">{model.tagline}</p>
                <p className="text-3xl font-display font-black text-zebra-gold mb-8">From {model.price}</p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  {model.specs.map((spec) => (
                    <div key={spec.label} className="p-4 rounded-xl border border-border/20 bg-section-dark">
                      <spec.icon className="w-4 h-4 text-primary mb-2" />
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{spec.label}</p>
                      <p className="text-sm font-bold text-foreground mt-1">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Features list */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {model.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-zebra-gold shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <Link
                  to="/customize"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest glow-red hover:scale-105 transition-all duration-300"
                >
                  Configure This Model <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight">
              Compare <span className="text-gradient-gold">Models</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-4 px-4 text-sm font-bold text-muted-foreground uppercase tracking-wider">Feature</th>
                  {models.map((m) => (
                    <th key={m.id} className="text-center py-4 px-4 text-sm font-bold text-foreground uppercase tracking-wider">{m.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Price", values: ["$14,999", "$17,999", "$19,999"] },
                  { label: "Seats", values: ["4", "6", "6"] },
                  { label: "Battery", values: ["51.2V 150Ah", "51.2V 230Ah", "73.6V 205Ah"] },
                  { label: "Motor", values: ["5KW AC", "5KW AC", "7.5KW AC"] },
                  { label: "Top Speed", values: ["25 MPH", "25 MPH", "30 MPH"] },
                  { label: "Range", values: ["80+ mi", "100+ mi", "100+ mi"] },
                  { label: "Solar Roof", values: ["✓", "✓", "✓"] },
                  { label: "Street Legal", values: ["✓", "✓", "✓"] },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-b border-border/10 ${i % 2 === 0 ? "bg-section-charcoal/50" : ""}`}>
                    <td className="py-4 px-4 text-sm font-semibold text-muted-foreground">{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="text-center py-4 px-4 text-sm text-foreground font-medium">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-6">
            Ready to <span className="text-gradient-red">Choose?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/customize" className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest glow-red hover:scale-105 transition-all">
              Build Your Cart →
            </Link>
            <Link to="/book-demo" className="px-10 py-4 rounded-full border border-foreground/20 font-bold text-sm uppercase tracking-widest text-foreground hover:border-primary/40 transition-all">
              Book a Test Drive
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Models;
