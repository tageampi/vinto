import { Link } from 'wouter';

interface ProductCardProps {
  product: any;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
      onClick={onClick}
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
        <div className="flex items-center mb-1">
          <img 
            src={product.seller.avatar} 
            alt={product.seller.username} 
            className="w-5 h-5 rounded-full mr-1"
          />
          <p className="text-xs text-neutral-dark">{product.seller.username}</p>
        </div>
        <h3 className="font-medium text-sm">{product.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="font-semibold text-primary">{product.price}</p>
          <p className="text-xs text-neutral-dark">{product.timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
