import { createContext, useState } from 'react';

export const ImagesContext = createContext([]);

export const ImagesProvider = ({ children }) => {

  const [userImages, setUserImages] = useState([])
  const [imageData, setImageData] = useState([])
  const [cropReset, setCropReset] = useState(false);
  const [croppedImages, setCroppedImages] = useState([]);


  return (
    <ImagesContext.Provider value={{ userImages, setUserImages, imageData, setImageData, croppedImages, setCroppedImages, cropReset, setCropReset }}>
      {children}
    </ImagesContext.Provider>
  );
};