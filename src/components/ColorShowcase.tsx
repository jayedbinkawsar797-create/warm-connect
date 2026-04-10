import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cartFrontBlack from "@/assets/cart-front-black.png";
import cartFrontBurgundy from "@/assets/cart-front-burgundy.png";
import cartFrontWhite from "@/assets/cart-front-white.png";
import cartFrontBlue from "@/assets/cart-front-blue.jpg";
import cartFrontGrey from "@/assets/cart-front-grey.png";

const colorOptions = [
  { id: "black", label: "Onyx Black", hex: "#1a1a1a", image: cartFrontBlack },
  { id: "burgundy", label: "Royal Burgundy", hex: "#6b1a2a", image: cartFrontBurgundy },
  { id: "white", label: "Pearl White", hex: "#e8e8e8", image: cartFrontWhite },
  { id: "blue", label: "Sapphire Blue", hex: "#1a3a8a", image: cartFrontBlue },
  { id: "grey", label: "Gunmetal Grey", hex: "#6a6a6a", image: cartFrontGrey },
];

const ColorShowcase = () => {
  const [active, setActive] = useState(colorOptions[0]);

  return (
    <section className="relative py-32 section-elevated overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">5 Premium Colors</p>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight">
            Choose Your <span className="text-gradient-gold">Presence</span>
          </h2>
        </motion.div>

        {/* Main image */}
        <div className="relative max-w-3xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden border border-border/20"
            >
              <img
                src={active.image}
                alt={`Zebra Cart - ${active.label}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-display font-black text-foreground">{active.label}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Color swatches */}
        <div className="flex justify-center gap-4 flex-wrap">
          {colorOptions.map((color) => (
            <button
              key={color.id}
              onClick={() => setActive(color)}
              className={`group flex flex-col items-center gap-2 transition-all duration-300`}
            >
              <div
                className={`w-16 h-16 rounded-full border-3 transition-all duration-300 group-hover:scale-110 ${
                  active.id === color.id ? "ring-2 ring-zebra-gold ring-offset-2 ring-offset-background scale-110" : ""
                }`}
                style={{
                  backgroundColor: color.hex,
                  borderColor: active.id === color.id ? "hsl(var(--zebra-gold))" : "hsl(var(--border))",
                }}
              />
              <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${
                active.id === color.id ? "text-zebra-gold" : "text-muted-foreground"
              }`}>
                {color.label.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorShowcase;
