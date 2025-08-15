import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isOnSale?: boolean;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  isOnSale = false,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden bg-card hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-all)] cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-[var(--transition-all)]"
        />
        {isOnSale && (
          <div className="absolute top-2 left-2 bg-sale text-white px-2 py-1 text-xs font-medium rounded">
            Sale
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-card/80 hover:bg-card opacity-0 group-hover:opacity-100 transition-[var(--transition-all)]"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-medium text-card-foreground line-clamp-2">{name}</h3>
        
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating)
                    ? "fill-rating text-rating"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-price">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          
          <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-[var(--transition-all)]">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}