import phoneImage from "@/assets/product-phone.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";
import watchImage from "@/assets/product-watch.jpg";

export const mockProducts = [
  {
    id: "1",
    name: "Premium Smartphone Pro Max",
    price: 899,
    originalPrice: 999,
    rating: 4.8,
    reviewCount: 2847,
    image: phoneImage,
    isOnSale: true,
  },
  {
    id: "2",
    name: "Wireless Bluetooth Headphones",
    price: 179,
    rating: 4.6,
    reviewCount: 1256,
    image: headphonesImage,
  },
  {
    id: "3",
    name: "Elegant Smart Watch Series 8",
    price: 349,
    originalPrice: 399,
    rating: 4.7,
    reviewCount: 892,
    image: watchImage,
    isOnSale: true,
  },
  {
    id: "4",
    name: "Ultra HD Gaming Monitor 27\"",
    price: 459,
    rating: 4.9,
    reviewCount: 567,
    image: phoneImage, // Using phone image as placeholder
  },
  {
    id: "5",
    name: "Professional Camera Lens Kit",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviewCount: 234,
    image: headphonesImage, // Using headphones image as placeholder
    isOnSale: true,
  },
  {
    id: "6",
    name: "Smart Home Security System",
    price: 299,
    rating: 4.5,
    reviewCount: 1890,
    image: watchImage, // Using watch image as placeholder
  },
  {
    id: "7",
    name: "Ergonomic Office Chair Premium",
    price: 549,
    originalPrice: 649,
    rating: 4.7,
    reviewCount: 445,
    image: phoneImage, // Using phone image as placeholder
    isOnSale: true,
  },
  {
    id: "8",
    name: "Portable Power Bank 20000mAh",
    price: 49,
    rating: 4.4,
    reviewCount: 3567,
    image: headphonesImage, // Using headphones image as placeholder
  },
  {
    id: "9",
    name: "Mechanical Gaming Keyboard RGB",
    price: 159,
    rating: 4.6,
    reviewCount: 1789,
    image: watchImage, // Using watch image as placeholder
  },
  {
    id: "10",
    name: "Fitness Tracker Advanced Pro",
    price: 199,
    originalPrice: 249,
    rating: 4.5,
    reviewCount: 2156,
    image: phoneImage, // Using phone image as placeholder
    isOnSale: true,
  },
];

export const trendingProducts = mockProducts.slice(0, 5);
export const bestSellers = mockProducts.slice(2, 7);
export const newArrivals = mockProducts.slice(5, 10);
export const forYouProducts = [
  { 
    ...mockProducts[0], 
    recommendationReason: "Your friends also like this" 
  },
  { 
    ...mockProducts[3], 
    recommendationReason: "Based on your recent views" 
  },
  { 
    ...mockProducts[6], 
    recommendationReason: "Similar to items you bought" 
  },
  { 
    ...mockProducts[8], 
    recommendationReason: "Trending in your area" 
  },
  { 
    ...mockProducts[1], 
    recommendationReason: "Perfect match for you" 
  }
];