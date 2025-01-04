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
    description: "Our organic tomatoes are sun-ripened to perfection, bursting with flavor and packed with nutrients. Grown without harmful pesticides, these vibrant red beauties are ideal for salads, sandwiches, or cooking. Each bite delivers a perfect balance of sweetness and acidity, bringing the taste of summer to your table year-round.",
    images: []
  },
  {
    id: 2,
    name: "Fresh Basil",
    category: "Herbs",
    price: 2.49,
    inStock: true,
    description: "Elevate your culinary creations with our aromatic fresh basil. Hand-picked at the peak of flavor, our basil leaves are fragrant, tender, and packed with essential oils. Perfect for pesto, Caprese salads, or as a garnish, this versatile herb will add a touch of gourmet to any dish. Grown using sustainable practices to ensure the best flavor and quality.",
    images: []
  },
  {
    id: 3,
    name: "Sunflower Bouquet",
    category: "Flowers",
    price: 12.99,
    inStock: true,
    description: "Bring a ray of sunshine into your home with our stunning sunflower bouquet. Each stem is carefully selected for its vibrant yellow petals and impressive size. These cheerful flowers are known to symbolize adoration and loyalty, making them perfect for brightening up any room or as a thoughtful gift. Our sunflowers are grown using eco-friendly practices to ensure long-lasting beauty.",
    images: []
  },
  {
    id: 4,
    name: "Organic Carrots",
    category: "Vegetables",
    price: 2.99,
    inStock: true,
    description: "Crunch into sweetness with our organic carrots. Harvested at the peak of freshness, these vibrant orange roots are packed with beta-carotene and fiber. Perfect for snacking, juicing, or cooking, our carrots are grown without synthetic pesticides, ensuring you get nothing but pure, earthy goodness. Experience the difference that organic farming makes in every crisp, flavorful bite.",
    images: []
  },
  {
    id: 5,
    name: "Lavender Plant",
    category: "Plants",
    price: 8.99,
    inStock: true,
    description: "Transform your garden or home with the soothing presence of our lavender plant. Known for its calming fragrance and beautiful purple blooms, this hardy perennial is perfect for borders, containers, or indoor spaces. Our lavender is grown using organic methods, ensuring a healthy plant that will thrive in your care. Enjoy its aromatic flowers in teas, sachets, or simply as a fragrant addition to your green space.",
    images: []
  },
  {
    id: 6,
    name: "Mixed Salad Greens",
    category: "Vegetables",
    price: 4.49,
    inStock: true,
    description: "Elevate your salads with our premium mix of organic salad greens. This vibrant blend includes tender lettuce varieties, peppery arugula, and nutrient-rich spinach, providing a symphony of flavors and textures in every bite. Harvested young for maximum tenderness and nutritional value, our salad mix is perfect for health-conscious food lovers. Grown without harmful chemicals, you can enjoy peace of mind with every crisp, refreshing serving.",
    images: []
  },
  {
    id: 7,
    name: "Rose Bush",
    category: "Plants",
    price: 15.99,
    inStock: false,
    description: "Add timeless elegance to your garden with our classic rose bush. Known for their symbol of love and beauty, these roses produce stunning, fragrant blooms throughout the season. Available in a variety of colors, each bush is carefully nurtured to ensure strong roots and healthy growth. While currently out of stock due to high demand, our rose bushes are worth the wait for their unparalleled beauty and charm in any landscape.",
    images: []
  },
  {
    id: 8,
    name: "Organic Strawberries",
    category: "Fruits",
    price: 5.99,
    inStock: true,
    description: "Indulge in the sweet, juicy goodness of our organic strawberries. Handpicked at the peak of ripeness, these ruby-red berries are bursting with flavor and natural sweetness. Perfect for snacking, baking, or adding to your favorite desserts, our strawberries are grown without synthetic pesticides, allowing their true taste to shine through. Rich in vitamin C and antioxidants, they're as nutritious as they are delicious.",
    images: []
  },
  {
    id: 9,
    name: "Mint Plant",
    category: "Herbs",
    price: 3.99,
    inStock: true,
    description: "Bring a burst of freshness to your herb garden with our vibrant mint plant. Known for its invigorating aroma and versatile culinary uses, this hardy herb is a must-have for any home cook or tea enthusiast. Our mint is grown using organic practices, ensuring a robust plant that will thrive in your garden or kitchen windowsill. Use the leaves to add a cool, refreshing touch to drinks, salads, or desserts.",
    images: []
  },
  {
    id: 10,
    name: "Tulip Bulbs",
    category: "Flowers",
    price: 9.99,
    inStock: true,
    description: "Plan for a spectacular spring display with our premium tulip bulbs. Each pack contains a carefully selected mix of vibrant colors, promising a dazzling show when they bloom. Easy to plant and care for, these bulbs are perfect for both novice and experienced gardeners. Our tulips are sourced from the best growers, ensuring high-quality bulbs that will produce strong, beautiful flowers year after year.",
    images: []
  },
  {
    id: 11,
    name: "Organic Apples",
    category: "Fruits",
    price: 4.99,
    inStock: true,
    description: "Bite into the crisp, sweet-tart perfection of our organic apples. Grown in our pesticide-free orchards, these apples are the epitome of wholesome goodness. Whether you prefer them as a healthy snack, baked into pies, or pressed into fresh cider, our apples deliver consistent quality and flavor. Rich in fiber and antioxidants, they're a delicious way to support your health and our sustainable farming practices.",
    images: []
  },
  {
    id: 12,
    name: "Succulent Collection",
    category: "Plants",
    price: 19.99,
    inStock: true,
    description: "Bring the beauty of low-maintenance greenery into your space with our diverse succulent collection. This carefully curated set includes a variety of shapes, colors, and textures, perfect for creating stunning arrangements or adding individual accents to your home or office. Known for their water-storing abilities, these hardy plants are ideal for busy plant lovers or those new to gardening. Each succulent is grown with care, promising to bring a touch of nature's artistry to any environment.",
    images: []
  },
];

export async function getProductImages(query: string): Promise<string[]> {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`,
    {
      method: "GET",
      headers: {
        Authorization: `${process.env.PEXELS_API_KEY}`,
      },
    },
  );

  console.log("Passed");

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.photos.map((photo: any) => photo.src.large);
}
