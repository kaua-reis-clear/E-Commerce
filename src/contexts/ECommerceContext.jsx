import { createContext, useState } from 'react';

export const ECommerceContext = createContext();

export default function ECommerceProvider({children}) {
  const [fullscreen, setFullscreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const values = {
    fullscreen,
    setFullscreen,
    showModal,
    setShowModal,
  }

  return (
    <ECommerceContext.Provider value={values}>{children}</ECommerceContext.Provider>
  );
} 