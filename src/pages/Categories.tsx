import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Cart, { CartItem } from "@/components/Cart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Headphones, Laptop, Watch, Gamepad2, Camera } from "lucide-react";

const Categories = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Smartphones",
      description: "Latest smartphones with cutting-edge technology",
      icon: Smartphone,
      productCount: 12,
      featured: true,
    },
    {
      id: 2,
      name: "Audio",
      description: "Premium headphones and audio equipment",
      icon: Headphones,
      productCount: 8,
      featured: true,
    },
    {
      id: 3,
      name: "Laptops",
      description: "High-performance laptops for work and gaming",
      icon: Laptop,
      productCount: 15,
      featured: false,
    },
    {
      id: 4,
      name: "Wearables",
      description: "Smart watches and fitness trackers",
      icon: Watch,
      productCount: 6,
      featured: false,
    },
    {
      id: 5,
      name: "Gaming",
      description: "Gaming accessories and peripherals",
      icon: Gamepad2,
      productCount: 9,
      featured: true,
    },
    {
      id: 6,
      name: "Cameras",
      description: "Professional cameras and photography gear",
      icon: Camera,
      productCount: 4,
      featured: false,
    },
  ];

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Categories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated categories of premium technology products
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    {category.featured && (
                      <Badge variant="default" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-center">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-foreground">{category.productCount}</span>
                    <p className="text-sm text-muted-foreground">Products Available</p>
                  </div>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Browse {category.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Categories CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Browse all our products or contact our team for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">View All Products</Button>
              <Button variant="outline" size="lg">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
      />
    </div>
  );
};

export default Categories;