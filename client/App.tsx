import { useState } from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/not-found";
import Navbar from "./components/Navbar";
import ProductDetailModal from "./components/ProductDetailModal";
import MessageModal from "./components/MessageModal";
import MessageSentModal from "./components/MessageSentModal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isMessageSentModalOpen, setIsMessageSentModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentSeller, setCurrentSeller] = useState(null);

  const openProductModal = (product: any, seller: any) => {
    setCurrentProduct(product);
    setCurrentSeller(seller);
    setIsProductModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openMessageModal = (seller: any) => {
    setCurrentSeller(seller);
    setIsMessageModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMessageModal = () => {
    setIsMessageModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const sendMessage = () => {
    closeMessageModal();
    setIsMessageSentModalOpen(true);
  };

  const closeMessageSentModal = () => {
    setIsMessageSentModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-neutral-light min-h-screen">
        <Navbar />
        <Router />
        
        {isProductModalOpen && currentProduct && currentSeller && (
          <ProductDetailModal 
            product={currentProduct} 
            seller={currentSeller}
            onClose={closeProductModal} 
            openMessageModal={() => openMessageModal(currentSeller)}
          />
        )}
        
        {isMessageModalOpen && currentSeller && (
          <MessageModal 
            seller={currentSeller}
            onClose={closeMessageModal}
            onSend={sendMessage}
          />
        )}
        
        {isMessageSentModalOpen && currentSeller && (
          <MessageSentModal 
            seller={currentSeller}
            onClose={closeMessageSentModal}
          />
        )}
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
