import { Link, useLocation } from 'wouter';

const Navbar = () => {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-primary font-heading font-bold text-2xl cursor-pointer">Vinto</span>
              </Link>
              <span className="ml-2 px-1.5 py-0.5 bg-primary text-white text-xs rounded-md">BETA</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/">
              <span className={`${location === '/' ? 'text-secondary' : 'text-neutral-dark hover:text-secondary'} font-medium cursor-pointer`}>
                <i className="ri-home-4-line mr-1"></i> Home
              </span>
            </Link>
            <Link href="/profile">
              <span className={`${location === '/profile' ? 'text-secondary' : 'text-neutral-dark hover:text-secondary'} font-medium cursor-pointer`}>
                <i className="ri-user-line mr-1"></i> Profile
              </span>
            </Link>
            <button className="text-neutral-dark hover:text-secondary font-medium bg-transparent border-0">
              <i className="ri-search-line mr-1"></i> Explore
            </button>
          </div>
          <div className="flex items-center">
            <button className="bg-primary hover:bg-primary-dark text-white rounded-full p-2 flex items-center text-sm">
              <i className="ri-add-line mr-1"></i> 
              <span className="hidden md:inline">Sell Item</span>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden bg-white border-t">
        <div className="flex justify-around py-2">
          <Link href="/">
            <span className={`${location === '/' ? 'text-secondary' : 'text-neutral-dark hover:text-secondary'} cursor-pointer block`}>
              <i className="ri-home-4-line text-xl"></i>
            </span>
          </Link>
          <Link href="/profile">
            <span className={`${location === '/profile' ? 'text-secondary' : 'text-neutral-dark hover:text-secondary'} cursor-pointer block`}>
              <i className="ri-user-line text-xl"></i>
            </span>
          </Link>
          <button className="text-neutral-dark hover:text-secondary bg-transparent border-0">
            <i className="ri-search-line text-xl"></i>
          </button>
          <button className="text-neutral-dark hover:text-secondary bg-transparent border-0">
            <i className="ri-heart-line text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
