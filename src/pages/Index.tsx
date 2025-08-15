import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RecommendationSection from "@/components/RecommendationSection";
import { trendingProducts, bestSellers, newArrivals, forYouProducts } from "@/data/mockProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <RecommendationSection
          title="Trending Now"
          subtitle="Discover what's popular with shoppers like you"
          products={trendingProducts}
        />
        
        <div className="bg-muted">
          <RecommendationSection
            title="Best Sellers"
            subtitle="Top-rated products loved by our customers"
            products={bestSellers}
          />
        </div>
        
        <RecommendationSection
          title="New Arrivals"
          subtitle="Fresh finds just added to our collection"
          products={newArrivals}
        />
        
        <div className="bg-muted">
          <RecommendationSection
            title="Recommended for You"
            subtitle="Handpicked based on your browsing history"
            products={forYouProducts}
          />
        </div>
      </main>
      
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">ShopEase</h3>
          <p className="text-muted-foreground">Your one-stop destination for amazing products</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
