import { createContext, useState } from 'react';

export const ImagesContext = createContext([]);

export const ImagesProvider = ({ children }) => {
  
  const [originalImages, setOriginalImages] = useState([]);

  const [croppedImages, setCroppedImages] = useState([]);

  const imagesObject = {
    originalImages,
    setOriginalImages,
    croppedImages,
    setCroppedImages
  }

  return (
    <ImagesContext.Provider value={{ imagesObject }}>
      {children}
    </ImagesContext.Provider>
  );
};