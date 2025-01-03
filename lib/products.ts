import { API_KEY } from "./API_KEY";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  description: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 3.99,
    inStock: true,
    description: "Juicy, ripe organic tomatoes grown with care on our farm.",
    images: [],
  },
  {
    id: 2,
    name: "Fresh Basil",
    category: "Herbs",
    price: 2.49,
    inStock: true,
    description:
      "Aromatic fresh basil, perfect for adding flavor to your dishes.",
    images: [],
  },
  {
    id: 3,
    name: "Sunflower Bouquet",
    category: "Flowers",
    price: 12.99,
    inStock: true,
    description:
      "Bright and cheerful sunflower bouquet to brighten up any room.",
    images: [],
  },
  {
    id: 4,
    name: "Organic Carrots",
    category: "Vegetables",
    price: 2.99,
    inStock: true,
    description: "Crunchy and sweet organic carrots, freshly harvested.",
    images: [],
  },
  {
    id: 5,
    name: "Lavender Plant",
    category: "Plants",
    price: 8.99,
    inStock: true,
    description:
      "Fragrant lavender plant, perfect for gardens or indoor spaces.",
    images: [],
  },
  {
    id: 6,
    name: "Mixed Salad Greens",
    category: "Vegetables",
    price: 4.49,
    inStock: true,
    description:
      "A mix of fresh, crisp salad greens for the perfect salad base.",
    images: [],
  },
  {
    id: 7,
    name: "Rose Bush",
    category: "Plants",
    price: 15.99,
    inStock: false,
    description: "Beautiful rose bush to add elegance to your garden.",
    images: [],
  },
  {
    id: 8,
    name: "Organic Strawberries",
    category: "Fruits",
    price: 5.99,
    inStock: true,
    description:
      "Sweet and juicy organic strawberries, perfect for snacking or desserts.",
    images: [],
  },
  {
    id: 9,
    name: "Mint Plant",
    category: "Herbs",
    price: 3.99,
    inStock: true,
    description: "Fresh mint plant, great for teas, cocktails, or cooking.",
    images: [],
  },
  {
    id: 10,
    name: "Tulip Bulbs",
    category: "Flowers",
    price: 9.99,
    inStock: true,
    description:
      "Colorful tulip bulbs ready to plant and bloom in your garden.",
    images: [],
  },
  {
    id: 11,
    name: "Organic Apples",
    category: "Fruits",
    price: 4.99,
    inStock: true,
    description:
      "Crisp and delicious organic apples, perfect for snacking or baking.",
    images: [],
  },
  {
    id: 12,
    name: "Succulent Collection",
    category: "Plants",
    price: 19.99,
    inStock: true,
    description:
      "A diverse collection of low-maintenance succulents for your home or office.",
    images: [],
  },
];

export async function getProductImages(query: string): Promise<string[]> {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`,
    {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    },
  );

  console.log("Passed");

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.photos.map((photo: any) => photo.src.large);
}
