import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cartFrontWhite from "@/assets/cart-front-white.png";
import cartFrontBurgundy from "@/assets/cart-front-burgundy.png";
import cartFrontBlue from "@/assets/cart-front-blue.jpg";

const LifestyleSection = () => {
  return (
    <section className="relative py-32 section-charcoal overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">The Zebra Life</p>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">
            Built for the Places<br />
            <span className="text-gradient-gold">You Actually Live.</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Coastal towns. Private communities. Resorts. Estates.
          </p>
        </motion.div>

        {/* Image grid with captions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { src: cartFrontWhite, label: "Coastal Sophistication", desc: "Engineered precision for waterfront living" },
            { src: cartFrontBurgundy, label: "Estate Elegance", desc: "Commanding presence meets refined luxury" },
            { src: cartFrontBlue, label: "Community Ready", desc: "Street-legal design built for everyday use" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4]"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display font-black text-xl text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-zebra-gold/30 text-zebra-gold font-bold text-sm uppercase tracking-widest hover:bg-zebra-gold hover:text-background transition-all duration-300"
          >
            See Zebra in Motion <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LifestyleSection;
