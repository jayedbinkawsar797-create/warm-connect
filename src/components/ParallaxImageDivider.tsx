import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParallaxImageDividerProps {
  image: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlay?: "dark" | "red" | "gold";
}

const ParallaxImageDivider = ({
  image,
  title,
  subtitle,
  height = "60vh",
  overlay = "dark",
}: ParallaxImageDividerProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overlayClass =
    overlay === "red"
      ? "bg-gradient-to-b from-background via-primary/10 to-background"
      : overlay === "gold"
      ? "bg-gradient-to-b from-background via-zebra-gold/10 to-background"
      : "bg-background/70";

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: height }}
    >
      <div
        className="absolute inset-0 -top-[25%] -bottom-[25%]"
        style={{
          transform: `translateY(${offsetY * 0.12}px)`,
          willChange: "transform",
        }}
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className={`absolute inset-0 ${overlayClass}`} />

      {(title || subtitle) && (
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-black tracking-tight text-foreground"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-4 text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
    </section>
  );
};

export default ParallaxImageDivider;
