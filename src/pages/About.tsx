import { useState } from "react";
import Header from "@/components/Header";
import Cart, { CartItem } from "@/components/Cart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Shield, Truck, Star } from "lucide-react";

const About = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const stats = [
    { label: "Years in Business", value: "15+", icon: Award },
    { label: "Happy Customers", value: "50K+", icon: Users },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Customer Rating", value: "4.9/5", icon: Star },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We only sell products that meet our strict quality standards",
      icon: Shield,
    },
    {
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your products to you fast",
      icon: Truck,
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our top priority in everything we do",
      icon: Users,
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About TechStore</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted Technology Partner
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, TechStore has been at the forefront of technology retail, 
            bringing you the latest and greatest in consumer electronics. We're passionate 
            about connecting people with technology that enhances their lives.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  To democratize access to cutting-edge technology by providing premium 
                  products at competitive prices, backed by exceptional customer service 
                  and expert guidance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe technology should empower everyone to achieve their goals, 
                  whether that's staying connected with loved ones, advancing their career, 
                  or simply enjoying life to the fullest.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Connecting the world through technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Join thousands of satisfied customers and discover why TechStore is the preferred choice for technology enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg">Contact Us</Button>
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

export default About;