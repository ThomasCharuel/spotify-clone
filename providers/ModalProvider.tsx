'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';

const ModalProvider = () => {
  // Ensure the modal is not open during SSR
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Test Modal"
      description="Test description"
      isOpen
      onChange={() => {}}
    >
      Test Children
    </Modal>
  );
};

export default ModalProvider;
