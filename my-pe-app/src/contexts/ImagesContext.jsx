import { createContext, useEffect, useState } from 'react';

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {

  const [originalImages, setOriginalImages] = useState([])
  const [imageTally, setImageTally] = useState(0);
  const [imageData, setImageData] = useState()
  const [cropReset, setCropReset] = useState(false);
  const [croppedImages, setCroppedImages] = useState([]);

  useEffect( () => {

    console.log('Current originalImages: ', originalImages);
    console.log('ImageData: ', imageData);

  }, [originalImages, setOriginalImages])

  return (
    <ImagesContext.Provider value={{ originalImages, setOriginalImages, imageTally, setImageTally, imageData, setImageData, croppedImages, setCroppedImages, cropReset, setCropReset }}>
      {children}
    </ImagesContext.Provider>
  );
};