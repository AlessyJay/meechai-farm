"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { products, Product, getProductImages } from "@/lib/products";
import Image from "next/image";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [productsWithImages, setProductsWithImages] = useState<Product[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedProducts = await Promise.all(
        products.map(async (product) => {
          const images = await getProductImages(product.name);
          return { ...product, images };
        }),
      );
      setProductsWithImages(updatedProducts);
    };
    fetchImages();
  }, []);

  const filteredProducts = productsWithImages
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "" || product.category === selectedCategory) &&
        (!inStockOnly || product.inStock),
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">Shop Our Products</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="w-full md:w-1/4">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Filters</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search products..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Categories</SelectItem>
                      <SelectItem value="Vegetables">Vegetables</SelectItem>
                      <SelectItem value="Fruits">Fruits</SelectItem>
                      <SelectItem value="Herbs">Herbs</SelectItem>
                      <SelectItem value="Flowers">Flowers</SelectItem>
                      <SelectItem value="Plants">Plants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-stock"
                    checked={inStockOnly}
                    onCheckedChange={(checked) =>
                      setInStockOnly(checked as boolean)
                    }
                  />
                  <Label htmlFor="in-stock">In stock only</Label>
                </div>
                <div>
                  <Label htmlFor="sort">Sort by</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger id="sort">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price_asc">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price_desc">
                        Price: High to Low
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
        <main className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/shop/${product.id}`}>
                  <Card className="cursor-pointer transition-shadow duration-300 hover:shadow-lg">
                    <CardContent className="p-4">
                      <div className="relative mb-4 aspect-square">
                        <Image
                          src={
                            product.images[0] ||
                            `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(product.name)}`
                          }
                          alt={product.name}
                          width={300}
                          height={300}
                          priority
                          className="size-full rounded-md object-cover"
                        />
                      </div>
                      <h3 className="mb-1 font-semibold">{product.name}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {product.category}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                        <Button size="sm">View Details</Button>
                      </div>
                      {!product.inStock && (
                        <p className="mt-2 text-sm text-red-500">
                          Out of stock
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
