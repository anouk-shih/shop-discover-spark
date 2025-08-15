import { Star, Heart, ShoppingCart, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

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
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  isOnSale = false,
}: ProductCardProps) {
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  const handleThumbsUp = () => {
    setFeedback(feedback === "up" ? null : "up");
  };

  const handleThumbsDown = () => {
    setFeedback(feedback === "down" ? null : "down");
  };

  const isUnrecommended = feedback === "down";

  return (
    <Card className={`group overflow-hidden bg-card hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-all)] cursor-pointer ${
      isUnrecommended ? "grayscale opacity-60" : ""
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-48 object-cover group-hover:scale-105 transition-[var(--transition-all)] ${
            isUnrecommended ? "grayscale" : ""
          }`}
        />
        {isOnSale && !isUnrecommended && (
          <div className="absolute top-2 left-2 bg-sale text-white px-2 py-1 text-xs font-medium rounded">
            Sale
          </div>
        )}
        
        {/* Feedback buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThumbsUp}
            className={`bg-card/80 hover:bg-card transition-[var(--transition-all)] h-7 w-7 ${
              feedback === "up" ? "bg-success text-white hover:bg-success/90" : ""
            }`}
          >
            <ThumbsUp className="h-3 w-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThumbsDown}
            className={`bg-card/80 hover:bg-card transition-[var(--transition-all)] h-7 w-7 ${
              feedback === "down" ? "bg-destructive text-white hover:bg-destructive/90" : ""
            }`}
          >
            <ThumbsDown className="h-3 w-3" />
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-2 right-2 bg-card/80 hover:bg-card opacity-0 group-hover:opacity-100 transition-[var(--transition-all)]"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-3">
        <h3 className={`font-medium line-clamp-2 ${
          isUnrecommended ? "text-muted-foreground" : "text-card-foreground"
        }`}>{name}</h3>
        
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
            <span className={`text-lg font-bold ${
              isUnrecommended ? "text-muted-foreground" : "text-price"
            }`}>${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          
          {!isUnrecommended && (
            <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-[var(--transition-all)]">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}