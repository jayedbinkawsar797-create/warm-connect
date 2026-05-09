import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Send } from "lucide-react";
import { Link } from "react-router-dom";
import zebraLogo from "@/assets/zebra-logo.png";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-14 pt-10 border-t border-border/20">
      <div className="max-w-md">
        <h4 className="font-display font-bold text-foreground mb-1 text-sm uppercase tracking-widest">Stay in the Loop</h4>
        <p className="text-xs text-muted-foreground mb-4">New models, events, and exclusive offers — straight to your inbox.</p>
        {status === "success" ? (
          <p className="text-sm text-primary font-bold">✓ You're subscribed! Thanks for joining.</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-full border border-border/30 bg-section-elevated text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all disabled:opacity-60"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-xs text-primary mt-2">Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="relative border-t border-border/20 section-charcoal grain-overlay">
    <div className="container relative z-10 mx-auto px-6 py-20 pb-28">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2 space-y-5">
          <img src={zebraLogo} alt="Zebra Golf Cart" className="h-10 w-auto" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Luxury street-legal electric golf carts with solar-powered innovation.
            Stripes of Power — designed and engineered in the USA.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" className="w-9 h-9 rounded-full border border-border/30 bg-section-elevated flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border/30 bg-section-elevated flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-border/30 bg-section-elevated flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-foreground mb-5 text-xs uppercase tracking-widest">Quick Links</h4>
          <div className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Models", href: "/models" },
              { label: "Customize", href: "/customize" },
              { label: "Experience", href: "/experience" },
              { label: "Book a Demo", href: "/book-demo" },
              { label: "Dealer Application", href: "/dealer" },
              { label: "Contact Us", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} to={l.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-foreground mb-5 text-xs uppercase tracking-widest">Contact</h4>
          <div className="space-y-4">
            <a href="tel:+19548204220" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-primary" /> (954) 820-4220
            </a>
            <a href="mailto:info@zebragolfcart.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4 text-primary" /> info@zebragolfcart.com
            </a>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-display font-bold text-foreground mb-5 text-xs uppercase tracking-widest">Location</h4>
          <div className="space-y-4">
            {["Florida Showroom"].map((loc) => (
              <div key={loc} className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" /> {loc}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterForm />

      {/* USA badge + copyright */}
      <div className="border-t border-border/20 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🇺🇸</span>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Designed &amp; Engineered in the USA</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zebra Golf Cart. All rights reserved. Street Legal LSV vehicles with VIN.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
