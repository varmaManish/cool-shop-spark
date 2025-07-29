import { useState } from "react";
import Header from "@/components/Header";
import Cart, { CartItem } from "@/components/Cart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, MessageSquare, Headphones } from "lucide-react";

const Contact = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      title: "Visit Our Store",
      description: "123 Tech Street, Silicon Valley, CA 94025",
      icon: MapPin,
    },
    {
      title: "Call Us",
      description: "+1 (555) 123-4567",
      icon: Phone,
    },
    {
      title: "Email Us",
      description: "hello@techstore.com",
      icon: Mail,
    },
    {
      title: "Business Hours",
      description: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
      icon: Clock,
    },
  ];

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageSquare,
      action: "Start Chat",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Headphones,
      action: "Call Now",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Find us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
                <CardDescription>
                  Get instant support through our quick channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{option.title}</h4>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {option.action}
                      </Button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Frequently Asked Questions</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find answers to common questions about orders, shipping, and returns
                  </p>
                  <Button variant="outline" className="w-full">
                    View FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
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

export default Contact;