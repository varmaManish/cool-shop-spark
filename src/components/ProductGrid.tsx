import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, List, Filter } from "lucide-react";

// Import product images
import phoneImage from "@/assets/product-phone.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";
import laptopImage from "@/assets/product-laptop.jpg";
import watchImage from "@/assets/product-watch.jpg";
import controllerImage from "@/assets/product-controller.jpg";
import cameraImage from "@/assets/product-camera.jpg";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 999.99,
    originalPrice: 1199.99,
    image: phoneImage,
    rating: 4.8,
    reviews: 2547,
    category: "Smartphones",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "AirPods Pro (2nd Gen)",
    price: 249.99,
    originalPrice: 299.99,
    image: headphonesImage,
    rating: 4.7,
    reviews: 1832,
    category: "Audio",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "MacBook Pro 14-inch",
    price: 1999.99,
    originalPrice: 2399.99,
    image: laptopImage,
    rating: 4.9,
    reviews: 987,
    category: "Laptops",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    price: 399.99,
    originalPrice: 499.99,
    image: watchImage,
    rating: 4.6,
    reviews: 1245,
    category: "Wearables",
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "PlayStation 5 Controller",
    price: 69.99,
    originalPrice: 79.99,
    image: controllerImage,
    rating: 4.5,
    reviews: 892,
    category: "Gaming",
    inStock: false,
    featured: false,
  },
  {
    id: 6,
    name: "Canon EOS R5 Camera",
    price: 3899.99,
    image: cameraImage,
    rating: 4.9,
    reviews: 456,
    category: "Cameras",
    inStock: true,
    featured: true,
  },
];

const categories = ["All", "Smartphones", "Audio", "Laptops", "Wearables", "Gaming", "Cameras"];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [products] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    filterAndSortProducts(category, sortBy);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    filterAndSortProducts(selectedCategory, sortOption);
  };

  const filterAndSortProducts = (category: string, sort: string) => {
    let filtered = category === "All" 
      ? products 
      : products.filter(product => product.category === category);

    // Sort products
    switch (sort) {
      case "featured":
        filtered = filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
      case "price-low":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    setFilteredProducts(filtered);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our curated selection of premium technology products
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 items-start lg:items-center justify-between">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryFilter(category)}
              className="transition-all duration-200"
            >
              {category}
              {category !== "All" && (
                <Badge variant="secondary" className="ml-2">
                  {products.filter(p => p.category === category).length}
                </Badge>
              )}
            </Button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Sort */}
          <Select value={sortBy} onValueChange={handleSort}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode Toggle */}
          <div className="flex border border-border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none border-l"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === "grid" 
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "grid-cols-1"
      }`}>
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16 animate-fade-in">
          <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters to see more results
          </p>
          <Button onClick={() => handleCategoryFilter("All")}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* Load More Button (for future pagination) */}
      {filteredProducts.length > 0 && filteredProducts.length < products.length && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;