import { useCallback } from 'react';
import { sellerProfile, sellerProducts } from '../data/mockData';

interface ProfilePageProps {
  openProductModal?: (product: any, seller: any) => void;
  openMessageModal?: (seller: any) => void;
}

const ProfilePage = ({ openProductModal, openMessageModal }: ProfilePageProps) => {
  const handleProductClick = useCallback((product: any) => {
    if (openProductModal) {
      openProductModal(product, sellerProfile);
    }
  }, [openProductModal]);

  const handleMessageClick = useCallback(() => {
    if (openMessageModal) {
      openMessageModal(sellerProfile);
    }
  }, [openMessageModal]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-primary-light to-secondary-light relative">
          {/* Avatar */}
          <div className="absolute -bottom-16 left-6 sm:left-8">
            <div className="relative">
              <img 
                src={sellerProfile.avatar} 
                alt={sellerProfile.username} 
                className="w-32 h-32 rounded-full border-4 border-white"
              />
              {sellerProfile.verified && (
                <span className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1.5">
                  <i className="ri-verified-badge-fill text-lg"></i>
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="pt-20 px-6 sm:px-8 pb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
            <div className="mb-4 sm:mb-0">
              <h1 className="font-heading font-bold text-2xl">{sellerProfile.username}</h1>
              <p className="text-neutral-dark">{sellerProfile.realName} • {sellerProfile.location}</p>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>
                <span className="text-sm text-neutral-dark ml-1">{sellerProfile.rating} (300+ reviews)</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button 
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg"
                onClick={handleMessageClick}
              >
                Message
              </button>
              <button className="px-6 py-2 border border-neutral-medium hover:bg-neutral-light text-neutral-dark rounded-lg">
                Follow
              </button>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-neutral-light rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-secondary">{sellerProfile.sales}+</p>
              <p className="text-sm text-neutral-dark">Sales</p>
            </div>
            <div className="bg-neutral-light rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-secondary">{sellerProfile.earnings}</p>
              <p className="text-sm text-neutral-dark">Earnings</p>
            </div>
            <div className="bg-neutral-light rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-secondary">{sellerProfile.products}</p>
              <p className="text-sm text-neutral-dark">Products</p>
            </div>
            <div className="bg-neutral-light rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-secondary">{sellerProfile.followers}</p>
              <p className="text-sm text-neutral-dark">Followers</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="font-heading font-semibold mb-2">About</h2>
            <p className="text-neutral-dark">{sellerProfile.bio}</p>
            <div className="flex flex-wrap mt-3 gap-2">
              {sellerProfile.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-neutral-light text-neutral-dark rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Listings */}
      <div>
        {/* Tabs */}
        <div className="border-b border-neutral-medium mb-6">
          <div className="flex space-x-8">
            <button className="px-1 py-3 border-b-2 border-primary text-secondary font-medium">
              Products
            </button>
            <button className="px-1 py-3 border-b-2 border-transparent text-neutral-dark hover:text-secondary">
              Reviews
            </button>
            <button className="px-1 py-3 border-b-2 border-transparent text-neutral-dark hover:text-secondary">
              About
            </button>
          </div>
        </div>
        
        {/* Filter Options */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading font-bold text-xl text-secondary">All Products ({sellerProfile.products})</h2>
          <div className="flex items-center">
            <span className="text-sm text-neutral-dark mr-2">Sort by:</span>
            <select className="border border-neutral-medium rounded-lg py-1 px-2 text-sm">
              <option>Latest</option>
              <option>Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sellerProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition" 
              onClick={() => handleProductClick({ ...product, seller: sellerProfile })}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
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
                <button className="absolute bottom-2 right-2 bg-white text-neutral-dark rounded-full p-2 shadow-sm hover:text-primary">
                  <i className="ri-heart-line"></i>
                </button>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm">{product.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-semibold text-primary">{product.price}</p>
                  <p className="text-xs text-neutral-dark">{product.timeAgo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
