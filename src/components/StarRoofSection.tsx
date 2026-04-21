import { motion } from "framer-motion";
import { Sparkles, Navigation } from "lucide-react";
import starRoof from "@/assets/star-roof-lights.jpg";
import powerSteering from "@/assets/power-steering.jpg";

const StarRoofSection = () => {
  return (
    <section className="relative py-32 section-dark grain-overlay">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Signature Touches</p>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">
            Details That <span className="text-gradient-gold">Define Luxury</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Star Roof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden border border-border/20 bg-section-elevated"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={starRoof}
                alt="Zebra Star Roof Lights — fiber-optic starlight headliner"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-section-dark via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 rounded-2xl bg-zebra-gold/10 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5 text-zebra-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black mb-3 text-foreground">Star Roof Lights</h3>
              <p className="text-muted-foreground leading-relaxed">
                A signature fiber-optic starlight headliner casts hundreds of warm, twinkling stars across
                the cabin ceiling — turning every evening cruise into a private galaxy.
              </p>
            </div>
          </motion.div>

          {/* Power Steering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group rounded-3xl overflow-hidden border border-border/20 bg-section-elevated"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={powerSteering}
                alt="Zebra electric power steering with leather-wrapped wheel"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-section-dark via-transparent to-transparent" />
            </div>
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-black mb-3 text-foreground">Electric Power Steering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Effortless control at every speed. Our integrated electric power steering delivers a
                smooth, responsive feel — the kind you expect from a premium automobile.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StarRoofSection;