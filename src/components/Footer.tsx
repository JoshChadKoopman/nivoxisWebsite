import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Shield className="h-6 w-6 text-accent" />
              <span>Nivoxis</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              South Africa's trusted partner for cybersecurity awareness training and POPIA compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/training" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Training & Packages
                </Link>
              </li>
              <li>
                <Link to="/phishing" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Phishing Simulations
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  POPIA Compliance
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/industries" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:+27824643384" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +27 82 464 3384
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:info@nivoixstraining.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@nivoixstraining.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span className="text-primary-foreground/80">
                  South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Nivoxis. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-accent transition-colors">
                PAIA Manual
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
