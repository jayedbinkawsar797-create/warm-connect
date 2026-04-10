import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cartAngle1 from "@/assets/cart-angle1.png";
import cartAngle2 from "@/assets/cart-angle2.png";
import cartAngle3 from "@/assets/cart-angle3.png";

const models = [
  {
    image: cartAngle1,
    name: "Breeze 4L",
    seats: "4-Seater",
    price: "From $14,999",
    specs: ["51.2V 150Ah Lithium", "5KW AC Motor", "80+ Mile Range"],
  },
  {
    image: cartAngle2,
    name: "Terrain 6",
    seats: "6-Seater",
    price: "From $17,999",
    specs: ["51.2V 230Ah Lithium", "5KW AC Motor", "100+ Mile Range"],
    featured: true,
  },
  {
    image: cartAngle3,
    name: "Terrain 6 Pro",
    seats: "6-Seater Pro",
    price: "From $19,999",
    specs: ["73.6V 205Ah Lithium", "7.5KW AC Motor", "100+ Mile Range"],
  },
];

const ModelsShowcase = () => {
  return (
    <section id="models" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,hsl(var(--zebra-gold)/0.04),transparent)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Lineup</p>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">
            Choose Your <span className="text-gradient-gold">Model</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-3 ${
                model.featured
                  ? "border-zebra-gold/30 shadow-[0_0_50px_-10px_hsl(var(--zebra-gold)/0.15)] bg-section-elevated"
                  : "border-border/20 hover:border-zebra-gold/20 bg-section-charcoal"
              }`}
            >
              {model.featured && (
                <div className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full bg-zebra-gold text-background text-[10px] font-bold uppercase tracking-widest">
                  Flagship
                </div>
              )}

              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-section-charcoal/80" />
                <img
                  src={model.image}
                  alt={model.name}
                  className="absolute inset-0 w-full h-full object-contain object-center p-6 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-8 pt-4">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display font-black text-2xl text-foreground">{model.name}</h3>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{model.seats}</span>
                </div>
                <p className="text-zebra-gold font-bold text-xl mb-5">{model.price}</p>
                <ul className="space-y-2.5 mb-8">
                  {model.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-zebra-gold" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/customize"
                  className="block w-full text-center py-3.5 rounded-full border border-zebra-gold/30 text-zebra-gold font-bold text-sm uppercase tracking-wider hover:bg-zebra-gold hover:text-background transition-all duration-300"
                >
                  Configure →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsShowcase;
