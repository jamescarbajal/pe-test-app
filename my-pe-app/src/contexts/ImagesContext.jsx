import { createContext, useState } from 'react';

export const ImagesContext = createContext([]);
export const ImagesProvider = ({ children }) => {
  
  const [originalImages, setOriginalImages] = useState([]);
  const [editedImages, setEditedImages] = useState([]);


  return (
    <ImagesContext.Provider value={{ editedImages, setEditedImages }}>
      {children}
    </ImagesContext.Provider>
  );
};