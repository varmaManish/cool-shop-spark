import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TechStore</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === "/" 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${
                location.pathname === "/products" 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Products
            </Link>
            <Link 
              to="/categories" 
              className={`transition-colors ${
                location.pathname === "/categories" 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                location.pathname === "/about" 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                location.pathname === "/contact" 
                  ? "text-primary font-medium" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>

            {/* Cart Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border animate-slide-up">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`transition-colors py-2 ${
                  location.pathname === "/" 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`transition-colors py-2 ${
                  location.pathname === "/products" 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className={`transition-colors py-2 ${
                  location.pathname === "/categories" 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors py-2 ${
                  location.pathname === "/about" 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors py-2 ${
                  location.pathname === "/contact" 
                    ? "text-primary font-medium" 
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;