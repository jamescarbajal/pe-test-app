import { createContext, useState } from 'react';

export const ImagesContext = createContext([]);

export const ImagesProvider = ({ children }) => {

  const [cropReset, setCropReset] = useState(false);
  const [editedImages, setEditedImages] = useState([]);


  return (
    <ImagesContext.Provider value={{ editedImages, setEditedImages, cropReset, setCropReset }}>
      {children}
    </ImagesContext.Provider>
  );
};