'use client';

import { useState, useEffect } from 'react';
import AuthModal from '@/components/AuthModal';

const ModalProvider = () => {
  // Ensure the modal is not open during SSR
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <AuthModal />;
};

export default ModalProvider;
