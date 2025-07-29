import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Cart, { CartItem } from "@/components/Cart";
import { Product } from "@/components/ProductCard";

const Products = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        toast({
          title: "Cart Updated",
          description: `Increased ${product.name} quantity to ${existingItem.quantity + 1}`,
        });
        
        return updatedItems;
      } else {
        toast({
          title: "Added to Cart",
          description: `${product.name} has been added to your cart`,
        });
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    
    if (item) {
      toast({
        title: "Removed from Cart",
        description: `${item.name} has been removed from your cart`,
        variant: "destructive",
      });
    }
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemsCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">All Products</h1>
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of premium technology products
          </p>
        </div>
      </div>

      <ProductGrid onAddToCart={handleAddToCart} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Products;