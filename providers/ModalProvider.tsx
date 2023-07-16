'use client';

import { useState, useEffect } from 'react';
import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';
import SubscribeModal from '@/components/SubscribeModal';
import { ProductWithPrice } from '@/types';

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  // Ensure the modal is not open during SSR
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};

export default ModalProvider;
