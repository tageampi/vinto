interface MessageModalProps {
  seller: any;
  onClose: () => void;
  onSend: () => void;
}

const MessageModal = ({ seller, onClose, onSend }: MessageModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-heading font-bold text-lg">Message to {seller.username}</h3>
          <button onClick={onClose} className="text-neutral-dark hover:text-secondary">
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            rows={5} 
            className="w-full border border-neutral-medium rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" 
            placeholder={`Hi, I'm interested in your ${seller.productName || 'products'}. Do you offer customization options?`}
          ></textarea>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className="flex-1 py-2 border border-neutral-medium text-neutral-dark hover:bg-neutral-light font-medium rounded-lg" 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="flex-1 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg" 
            onClick={onSend}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
