import { motion } from "framer-motion";
import cartFrontBlack from "@/assets/cart-front-black.png";

const YouCanFeelIt = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={cartFrontBlack} alt="" className="w-full h-full object-cover opacity-15 scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
              The Zebra Difference
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-[0.95] mb-8">
              You Can <span className="text-gradient-gold">Feel It.</span>
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              "Customers may not know why Zebra feels different — they just know it does.",
              "It's in the quiet confidence of the drive.",
              "It's in the solidity of every touchpoint.",
              "It's in the assurance that nothing was rushed, skipped, or outsourced to chance.",
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`text-lg md:text-xl leading-relaxed ${
                  i === 0 ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {line}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-zebra-gold font-display font-bold text-xl mt-12 tracking-wide">
                This is not accidental. It is deliberate.
              </p>
              <div className="mt-6 h-[2px] w-32 bg-gradient-to-r from-zebra-gold to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouCanFeelIt;
