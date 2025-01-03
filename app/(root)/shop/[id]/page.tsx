"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { products, Product, getProductImages } from "@/lib/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProductWithImages = async () => {
      const fetchedProduct = products.find((p) => p.id === Number(id));
      if (fetchedProduct) {
        const images = await getProductImages(fetchedProduct.name);
        setProduct({ ...fetchedProduct, images });
      } else {
        setProduct(null);
      }
    };
    fetchProductWithImages();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    setQuantity(1);
    setIsAddedToCart(true);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(0, prev + change));
    if (quantity + change === 0) {
      setIsAddedToCart(false);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "10px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="mt-4 h-1 w-4 rounded-full bg-white"></div>
    ),
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative">
          <Slider {...settings}>
            {product.images && product.images.length > 0 ? (
              product.images.map((image, index) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))
            ) : (
              <div className="relative flex aspect-square items-center justify-center rounded-lg bg-gray-200">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </Slider>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
          <p className="mb-4 text-xl font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          <div className="mb-6">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          {product.inStock ? (
            <div className="mb-6">
              <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-800">
                In Stock
              </span>
            </div>
          ) : (
            <div className="mb-6">
              <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-sm font-semibold text-red-800">
                Out of Stock
              </span>
            </div>
          )}
          {isAddedToCart ? (
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(-1)}
              >
                <Minus className="size-4" />
              </Button>
              <span className="text-xl font-semibold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(1)}
              >
                <Plus className="size-4" />
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
