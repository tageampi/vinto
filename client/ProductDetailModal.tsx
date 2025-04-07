interface ProductDetailModalProps {
  product: any;
  seller: any;
  onClose: () => void;
  openMessageModal: () => void;
}

const ProductDetailModal = ({ product, seller, onClose, openMessageModal }: ProductDetailModalProps) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-screen overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b">
          <h2 className="font-heading font-bold text-lg">{product.title}</h2>
          <button onClick={onClose} className="text-neutral-dark hover:text-secondary">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        
        <div className="p-4">
          {/* Product Images */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="md:w-7/12">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                <img 
                  src={product.image} 
                  alt="Thumbnail" 
                  className="w-full h-16 object-cover rounded cursor-pointer border-2 border-primary"
                />
                {product.thumbnails && product.thumbnails.map((thumb: string, index: number) => (
                  <img 
                    key={index}
                    src={thumb} 
                    alt="Thumbnail" 
                    className="w-full h-16 object-cover rounded cursor-pointer"
                  />
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-5/12">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h1 className="font-heading font-bold text-xl text-secondary">{product.title}</h1>
                  <p className="text-primary text-xl font-semibold mt-1">{product.price}</p>
                </div>
                <button className="text-neutral-dark hover:text-primary p-1">
                  <i className="ri-heart-line text-xl"></i>
                </button>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>
                <span className="text-sm text-neutral-dark ml-1">4.7 (121 reviews)</span>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-neutral-dark">{product.description}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Details:</h3>
                <ul className="text-sm text-neutral-dark space-y-1">
                  {product.details && Object.entries(product.details).map(([key, value]) => (
                    <li key={key}><span className="font-medium">{key}:</span> {value}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <img 
                    src={seller.avatar} 
                    alt={seller.username} 
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="font-medium text-sm">{seller.username} <i className="ri-verified-badge-fill text-primary"></i></p>
                    <p className="text-xs text-neutral-dark">{seller.sales}+ sales • {seller.rating} rating</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg">
                  Buy Now
                </button>
                <button className="w-full py-2.5 border border-primary text-primary hover:bg-primary-light hover:bg-opacity-10 font-medium rounded-lg">
                  Add to Cart
                </button>
                <button 
                  className="w-full py-2.5 bg-secondary hover:bg-secondary-dark text-white font-medium rounded-lg"
                  onClick={openMessageModal}
                >
                  Message Seller
                </button>
              </div>
            </div>
          </div>
          
          {/* Comment Section */}
          <div className="mt-8 border-t pt-6">
            <h3 className="font-heading font-bold text-lg mb-4">Comments</h3>
            
            <div className="mb-6">
              {product.comments && product.comments.map((comment: any, index: number) => (
                <div key={index} className="flex items-start space-x-3 mb-4">
                  <img 
                    src={comment.user.avatar} 
                    alt={comment.user.name} 
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="bg-neutral-light rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-medium text-sm">{comment.user.name}</p>
                        <p className="text-xs text-neutral-dark">{comment.timeAgo}</p>
                      </div>
                      <p className="text-sm">{comment.text}</p>
                    </div>
                    <div className="flex items-center mt-1 text-xs text-neutral-dark">
                      <button className="flex items-center hover:text-secondary">
                        <i className="ri-heart-line mr-1"></i> Like
                      </button>
                      <span className="mx-2">•</span>
                      <button className="hover:text-secondary">Reply</button>
                    </div>
                    
                    {comment.replies && comment.replies.map((reply: any, replyIndex: number) => (
                      <div key={replyIndex} className="flex items-start space-x-3 mt-2 pl-4">
                        <img 
                          src={reply.user.avatar} 
                          alt={reply.user.name} 
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="bg-neutral-light rounded-lg p-3">
                            <div className="flex justify-between items-start mb-1">
                              <p className="font-medium text-sm">
                                {reply.user.name} 
                                {reply.isSeller && <span className="text-primary text-xs ml-1">Seller</span>}
                              </p>
                              <p className="text-xs text-neutral-dark">{reply.timeAgo}</p>
                            </div>
                            <p className="text-sm">{reply.text}</p>
                          </div>
                          <div className="flex items-center mt-1 text-xs text-neutral-dark">
                            <button className="flex items-center hover:text-secondary">
                              <i className="ri-heart-line mr-1"></i> Like
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-start space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLHdvbWFufHx8fHx8MTY5NTU0NzIxNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40" 
                alt="Current User" 
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <textarea 
                  className="w-full border border-neutral-medium rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" 
                  placeholder="Add a comment..."
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button className="px-4 py-1.5 bg-primary hover:bg-primary-dark text-white text-sm rounded-lg">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
