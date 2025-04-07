import { Link } from 'wouter';

interface SellerCardProps {
  seller: any;
}

const SellerCard = ({ seller }: SellerCardProps) => {
  return (
    <Link href="/profile">
      <div className="flex-shrink-0 flex flex-col items-center space-y-2 w-24 cursor-pointer">
        <div className="relative">
          <img 
            src={seller.avatar} 
            alt={seller.username} 
            className={`w-16 h-16 rounded-full object-cover border-2 ${seller.verified ? 'border-primary' : 'border-neutral-medium'}`}
          />
          {seller.verified && (
            <span className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1 text-xs">
              <i className="ri-verified-badge-fill"></i>
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-center">{seller.username}</p>
        <p className="text-xs text-neutral-dark">{seller.sales}+ sales</p>
      </div>
    </Link>
  );
};

export default SellerCard;
