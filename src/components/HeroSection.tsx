import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Products
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Shop the latest trends and find incredible deals on everything you love
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
            Explore Categories
          </Button>
        </div>
      </div>
    </section>
  );
}