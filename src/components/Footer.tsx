import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import zebraLogo from "@/assets/zebra-logo.png";

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
          <h4 className="font-display font-bold text-foreground mb-5 text-xs uppercase tracking-widest">Locations</h4>
          <div className="space-y-4">
            {["Florida Showroom", "Arizona Showroom", "Atlanta Showroom"].map((loc) => (
              <div key={loc} className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" /> {loc}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* USA badge + copyright */}
      <div className="border-t border-border/20 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🇺🇸</span>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Designed & Engineered in the USA</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zebra Golf Cart. All rights reserved. Street Legal LSV vehicles with VIN.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
