import React, { useRef, useEffect } from 'react';

const ImageOutput = ({ dataURL, cropData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = dataURL;
    image.onload = () => {
      // Set canvas dimensions to match the desired cropped image size
      canvas.width = cropData.width;
      canvas.height = cropData.height;

      // Draw the cropped portion of the original image onto the canvas
      ctx.drawImage(
        image,
        cropData.x, // Source X
        cropData.y, // Source Y
        cropData.width, // Source Width
        cropData.height, // Source Height
        0, // Destination X
        0, // Destination Y
        cropData.width, // Destination Width
        cropData.height // Destination Height
      );
    };
  }, [dataURL, cropData]);

  return <canvas ref={canvasRef} />;
};

export default ImageOutput;