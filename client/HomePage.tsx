import { useCallback } from 'react';
import ProductCard from '../components/ProductCard';
import SellerCard from '../components/SellerCard';
import { featuredProducts, products, topSellers } from '../data/mockData';

interface HomePageProps {
  openProductModal?: (product: any, seller: any) => void;
}

const HomePage = ({ openProductModal }: HomePageProps) => {
  const handleProductClick = useCallback((product: any) => {
    if (openProductModal) {
      openProductModal(product, product.seller);
    }
  }, [openProductModal]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Featured Section */}
      <div className="mb-8 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-heading font-bold text-xl text-secondary">Featured Products</h2>
        </div>
        <div className="p-4 overflow-x-auto">
          <div className="flex space-x-4">
            {featuredProducts.map((product) => (
              <div className="flex-shrink-0 w-36 space-y-2" key={product.id} onClick={() => handleProductClick(product)}>
                <div className="relative h-36 w-36 rounded-lg bg-neutral-medium overflow-hidden cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full w-full object-cover"
                  />
                  {product.badge && (
                    <span className={`absolute top-2 right-2 ${
                      product.badge === 'New' ? 'bg-primary' : 
                      product.badge === 'Trending' ? 'bg-secondary' : 
                      'bg-gray-500'
                    } text-white text-xs px-2 py-0.5 rounded-full`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium truncate">{product.title}</p>
                <p className="text-primary font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading font-bold text-xl text-secondary">Discover Products</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-neutral-medium rounded-full text-sm hover:bg-neutral-medium">All</button>
            <button className="px-3 py-1 border border-neutral-medium rounded-full text-sm hover:bg-neutral-medium">Clothing</button>
            <button className="px-3 py-1 border border-neutral-medium rounded-full text-sm hover:bg-neutral-medium">Jewelry</button>
            <button className="px-3 py-1 border border-neutral-medium rounded-full text-sm hover:bg-neutral-medium">Home</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full">
            Load More
          </button>
        </div>
      </div>

      {/* Top Sellers Section */}
      <div className="mb-8 bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-heading font-bold text-xl text-secondary">Top Sellers</h2>
        </div>
        <div className="p-4 overflow-x-auto">
          <div className="flex space-x-6">
            {topSellers.map((seller) => (
              <SellerCard key={seller.id} seller={seller} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
