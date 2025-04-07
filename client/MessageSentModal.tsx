interface MessageSentModalProps {
  seller: any;
  onClose: () => void;
}

const MessageSentModal = ({ seller, onClose }: MessageSentModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <i className="ri-check-line text-green-500 text-3xl"></i>
          </div>
        </div>
        <h3 className="font-heading font-bold text-lg mb-2">Message Sent!</h3>
        <p className="text-neutral-dark mb-4">Your message has been sent to {seller.username}. They typically respond within 24 hours.</p>
        <button 
          className="w-full py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageSentModal;
