import { useState, useEffect, useContext } from 'react';
import { getImages, storeImages } from '../utils/idb-keyval';
import Cropper from 'react-easy-crop';
import { ImagesContext } from '../contexts/ImagesContext';


export default function CircleCrop( {imageIndex, getCroppedArea, getZoomInfo, getAreaPixels } ) {

  const { cropReset, setCropReset  } = useContext(ImagesContext);

  const orderOptions = JSON.parse(sessionStorage.getItem('orderDetails'));
  const orderQty = orderOptions.Quantity;

  const [crop, setCrop] = useState({ x:0, y:0  });
  const [zoom, setZoom] = useState(1);
  const [workingURL, setWorkingURL] = useState(null)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const currentCropAndZoom = async (data) => {
    const imageArray = await getImages('userImages')
    const cropInfo = imageArray[data].cropData
    const pixelInfo = imageArray[data].pixelArea;
    const zoomInfo = imageArray[data].zoomData;
    console.log('cropInfo in circlecrop: ', cropInfo, '\npixelArea in circle crop: ', pixelInfo);
    setCrop({
      x: cropInfo.x,
      y: cropInfo.y,
      width: cropInfo.width,
      height: cropInfo.height,
    })
    setZoom(zoomInfo);
  }

  const onCropAreaChange = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    getCroppedArea(crop);
    getAreaPixels(croppedAreaPixels);
    getZoomInfo(zoom);
  }


  useEffect( () => {

    if (cropReset){
      setCrop({x: 0, y:0, width: '100%', height: '100%'});
      setZoom(1);
      currentCropAndZoom(imageIndex);
      setCropReset(false);
    };
    
    const getImageURL = async (data) => {
      const pulledArray = await getImages('userImages');
      const currentURL = pulledArray[data].data_url;
      setWorkingURL(currentURL)
    }

    getImageURL(imageIndex);

    currentCropAndZoom(imageIndex);

  }, [imageIndex, cropReset]);

  return (
    <div style={{ 
      position:'relative',
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      height:'100%', 
      width: 700,
      maxWidth:'100%', 
      }} >
        <Cropper
          image={workingURL}
          showGrid={false}
          cropShape="round"
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropAreaChange={onCropAreaChange}
          onZoomChange={setZoom}

        />
    </div>
  )
}