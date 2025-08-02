import { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';

export default function UserImages() {

  const orderData = sessionStorage.getItem('orderOptions');
  const parsedData = JSON.parse(orderData);
  const imageCount = parsedData.Quantity;

  const [images, setImages] = useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

    useEffect( () => {
    const sessionImages = images;
    sessionStorage.setItem('sessionImages', JSON.stringify(sessionImages));
  });

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={imageCount}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
            
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload
            </button>
            &nbsp;
            <button onClick={() => onImageUpdate(index)}>Replace</button>
            &nbsp;
            <button onClick={() => onImageRemove(index)}>Delete</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}