import { motion } from "framer-motion";
import z1 from "@/assets/z1.webp";
import zm1 from "@/assets/zm1.webp";
import zw1 from "@/assets/zw1.webp";
import zdash1 from "@/assets/zdash1.webp";
import cartFrontBlack from "@/assets/cart-front-black.png";
import cartFrontBlue from "@/assets/cart-front-blue.jpg";
import cartRearBlack from "@/assets/cart-rear-black.png";
import cartFrontGrey from "@/assets/cart-front-grey.png";

const images = [
  { src: cartFrontBlack, alt: "Zebra Cart — Onyx Black Front", span: "col-span-2 row-span-2" },
  { src: zdash1, alt: "Carbon Fiber Dashboard", span: "col-span-1 row-span-1" },
  { src: zm1, alt: "Diamond-Stitched Interior", span: "col-span-1 row-span-1" },
  { src: zw1, alt: "Premium Alloy Wheels", span: "col-span-1 row-span-1" },
  { src: cartRearBlack, alt: "Rear View — LED Taillights", span: "col-span-1 row-span-1" },
  { src: cartFrontBlue, alt: "Sapphire Blue Edition", span: "col-span-1 row-span-1" },
  { src: z1, alt: "Zebra Cart Side Profile", span: "col-span-1 row-span-1" },
  { src: cartFrontGrey, alt: "Gunmetal Grey — Front View", span: "col-span-2 row-span-1" },
];

const GalleryStrip = () => {
  return (
    <section className="py-28 overflow-hidden section-elevated relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-zebra-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Craftsmanship</p>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
            Defined by <span className="text-gradient-gold">Details</span>
          </h2>
        </motion.div>
      </div>

      {/* Masonry-style grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-sm font-bold text-foreground">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryStrip;
