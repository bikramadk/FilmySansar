import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/">
              <div className="text-white font-bold text-2xl tracking-wide mb-4">
                <span className="text-white">Filmy</span>
                <span className="text-[#f43f5e]">Sansar</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your one-stop destination for all things cinema. Explore movies, TV shows, and more with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#f43f5e] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f43f5e] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f43f5e] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f43f5e] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">QUICK LINKS</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                Home
              </Link>
              <Link to="/catalog" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                Movies
              </Link>
              <Link to="/tv-shows" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                TV Shows
              </Link>
              <Link to="/genres" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                Genres
              </Link>
              <Link to="/new-releases" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                New Releases
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">SUPPORT</h3>
            <div className="space-y-3">
              <Link to="/help" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                Help Center
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/faq" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                Pricing Plans
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-[#f43f5e] transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">CONTACT INFO</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-[#f43f5e]" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-[#f43f5e]" />
                <span>+977-1-4444444</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-[#f43f5e]" />
                <span>info@filmysansar.com</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#333333] px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 NepCine. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-[#f43f5e] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#f43f5e] transition-colors">
              Terms of Use
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-[#f43f5e] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;