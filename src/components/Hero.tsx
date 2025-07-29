import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Shield, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <Star className="h-4 w-4 fill-current" />
                <span>Rated #1 Tech Store</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Latest Tech
                </span>
                Innovation
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Premium technology products with cutting-edge design and 
                unmatched performance. Your gateway to the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Shop Collection
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-success" />
                <span>2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4 text-success" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-success" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              {/* Main Product Showcase */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-card-hover">
                  <img
                    src="/src/assets/product-phone.jpg"
                    alt="Featured Product"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  
                  {/* Product Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">iPhone 15 Pro</h3>
                        <p className="text-sm text-muted-foreground">Latest Premium Smartphone</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">$999</p>
                        <p className="text-xs text-success">In Stock</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-pulse">
                <Star className="h-5 w-5 fill-current" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground rounded-full p-3 shadow-lg">
                <Shield className="h-5 w-5" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;